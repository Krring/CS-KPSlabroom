"""Refresh data/publications.json from OpenAlex and ORCID, filling details from Crossref.

- Reads works linked to the ORCID iD from OpenAlex (covers both surnames; no key needed),
  and also the public works list on ORCID itself.
- Looks up each DOI on Crossref for authors, volume and pages.
- Keeps entries already in the file that ORCID does not list (added by hand),
  and keeps hand edits to an entry unless Crossref has a value for an empty field.
Run locally:  python scripts/update_publications.py
"""
import json
import pathlib
import time
import urllib.parse
import urllib.request

ORCID_ID = "0000-0002-4092-6575"
MAILTO = "chatsuda.sak@ku.th"  # contact address requested by Crossref
OUT = pathlib.Path(__file__).resolve().parent.parent / "data" / "publications.json"
UA = f"lab-website-updater (mailto:{MAILTO})"


def get_json(url, accept="application/json"):
    req = urllib.request.Request(url, headers={"Accept": accept, "User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def orcid_works():
    data = get_json(f"https://pub.orcid.org/v3.0/{ORCID_ID}/works")
    works = []
    for group in data.get("group", []):
        s = group["work-summary"][0]
        ids = (s.get("external-ids") or {}).get("external-id") or []
        doi = next((i["external-id-value"] for i in ids if i.get("external-id-type") == "doi"), "")
        year = ((s.get("publication-date") or {}).get("year") or {}).get("value", "")
        works.append({
            "year": int(year) if str(year).isdigit() else year,
            "title": ((s.get("title") or {}).get("title") or {}).get("value", ""),
            "journal": (s.get("journal-title") or {}).get("value", ""),
            "doi": doi.lower(),
            "authors": "", "volume": "", "pages": "",
        })
    return works


def norm(title):
    return "".join(ch for ch in title.lower().replace("*", "") if ch.isalnum())


def openalex_works():
    url = ("https://api.openalex.org/works?per-page=200&filter=author.orcid:" + ORCID_ID
           + "&mailto=" + urllib.parse.quote(MAILTO))
    works = []
    for w in get_json(url).get("results", []):
        b = w.get("biblio") or {}
        pages = b.get("first_page") or ""
        if b.get("last_page") and b.get("last_page") != pages:
            pages = f"{pages}-{b['last_page']}"
        src = ((w.get("primary_location") or {}).get("source") or {}).get("display_name", "")
        names = [a["author"]["display_name"] for a in w.get("authorships", [])]
        works.append({
            "year": w.get("publication_year") or "",
            "title": w.get("title") or "",
            "journal": src,
            "doi": (w.get("doi") or "").replace("https://doi.org/", "").lower(),
            "authors": ", ".join(short_name(n) for n in names),
            "volume": b.get("volume") or "",
            "pages": pages,
        })
    return works


def short_name(full):
    parts = full.split()
    if len(parts) < 2:
        return full
    return f"{parts[-1]} {initials(' '.join(parts[:-1]))}"


def initials(given):
    parts = given.replace("-", " ").replace(".", " ").split()
    return "".join(p[0].upper() for p in parts if p)


def crossref(doi):
    try:
        m = get_json("https://api.crossref.org/works/" + urllib.parse.quote(doi))["message"]
    except Exception as e:  # missing DOI or network hiccup: skip, keep what we have
        print("crossref skip", doi, e)
        return {}
    authors = ", ".join(
        f"{a.get('family', '')} {initials(a.get('given', ''))}".strip()
        for a in m.get("author", [])
    )
    year = None
    for key in ("published-print", "issued", "published-online"):
        parts = (m.get(key) or {}).get("date-parts") or [[None]]
        if parts[0][0]:
            year = parts[0][0]
            break
    return {
        "authors": authors,
        "title": (m.get("title") or [""])[0],
        "journal": (m.get("container-title") or [""])[0],
        "volume": m.get("volume", ""),
        "pages": m.get("page", "") or m.get("article-number", ""),
        "year": year,
    }


def main():
    existing = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else []
    entries = {}
    for e in existing:
        entries[e.get("doi", "").lower() or norm(e.get("title", ""))] = e

    def find(w):
        if w["doi"] and w["doi"] in entries:
            return w["doi"]
        t = norm(w["title"])
        for k, e in entries.items():
            if norm(e.get("title", "")) == t:
                return k
        return w["doi"] or t

    incoming = []
    for source in (openalex_works, orcid_works):
        try:
            incoming += source()
        except Exception as e:  # one source down should not stop the other
            print("source failed", source.__name__, e)

    for w in incoming:
        if not w.get("title"):
            continue
        key = find(w)
        entry = entries.get(key, {})
        for k, v in w.items():  # fill empty fields only; hand edits win
            if v and not entry.get(k):
                entry[k] = v
        entries[key] = entry

    for entry in entries.values():
        if not entry.get("doi"):
            continue
        needs = [k for k in ("authors", "volume", "pages", "journal") if not entry.get(k)]
        if not needs:
            continue
        cr = crossref(entry["doi"])
        for k in needs:
            if cr.get(k):
                entry[k] = cr[k]
        if not entry.get("year") and cr.get("year"):
            entry["year"] = cr["year"]
        time.sleep(1)

    result = [
        {k: e.get(k, "") for k in ("year", "authors", "title", "journal", "volume", "pages", "doi")}
        for e in entries.values()
    ]
    result.sort(key=lambda e: (-(e["year"] if isinstance(e["year"], int) else 0), e["title"]))
    new_text = json.dumps(result, ensure_ascii=False, indent=2) + "\n"
    if OUT.exists() and OUT.read_text(encoding="utf-8") == new_text:
        print("no change")
        return
    OUT.write_text(new_text, encoding="utf-8")
    print(f"wrote {len(result)} publications")


if __name__ == "__main__":
    main()
