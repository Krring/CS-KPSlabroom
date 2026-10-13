"""Refresh data/publications.json from ORCID, filling details from Crossref.

- Reads public works from the ORCID public API (no key needed for public records).
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
MAILTO = "lab-website@example.org"  # Crossref asks for a contact address; change to the lab email
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
        })
    return works


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
    by_doi = {e.get("doi", "").lower(): e for e in existing if e.get("doi")}
    manual = [e for e in existing if not e.get("doi")]

    for w in orcid_works():
        key = w["doi"] or w["title"].lower()
        entry = by_doi.get(key, {})
        for k, v in w.items():
            if v and not entry.get(k):
                entry[k] = v
        by_doi[key] = entry

    for key, entry in by_doi.items():
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
        for e in by_doi.values()
    ] + manual
    result.sort(key=lambda e: (-(e["year"] if isinstance(e["year"], int) else 0), e["title"]))
    new_text = json.dumps(result, ensure_ascii=False, indent=2) + "\n"
    if OUT.exists() and OUT.read_text(encoding="utf-8") == new_text:
        print("no change")
        return
    OUT.write_text(new_text, encoding="utf-8")
    print(f"wrote {len(result)} publications")


if __name__ == "__main__":
    main()
