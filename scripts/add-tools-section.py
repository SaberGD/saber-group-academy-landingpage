#!/usr/bin/env python3
"""Put the Saber Group Tools section (sections/tools/) into the production build in dist/.

dist/ is the build that goes live and src/ is older, so the section is added to the built bundle:
  - a React component that renders sections/tools/section.html, placed after #programs;
  - an "أدواتنا" link to #tools in the header and footer menus;
  - sections/tools/section.css appended to the stylesheet.
The JS and CSS get new hashed names (and index.html points at them), so browsers and the service
worker fetch the new files. Running it again replaces the previous copy of the section, so after
editing the HTML or CSS just run it again:

    python3 -I scripts/add-tools-section.py
"""

import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
SECTION = ROOT / "sections" / "tools"
JS_START, JS_END = "/*tools-section:start*/", "/*tools-section:end*/"
CSS_START, CSS_END = "/*tools-section:start*/", "/*tools-section:end*/"

AFTER_PROGRAMS = 'S.jsx("section",{className:"section system-section",id:"system"'
NAV_LINK = 'S.jsx("a",{href:"#tools",children:"أدواتنا"}),'
NAV_AFTER = 'S.jsx("a",{href:"#programs",children:"البرامج"}),'


def fail(msg: str) -> None:
    sys.exit(f"add-tools-section: {msg}")


def strip_between(text: str, start: str, end: str) -> str:
    return re.sub(re.escape(start) + r".*?" + re.escape(end), "", text, flags=re.S)


def hashed(name: str, data: bytes) -> str:
    stem, ext = name.rsplit(".", 1)
    stem = re.sub(r"-[A-Za-z0-9_-]{8}$", "", stem)
    return f"{stem}-{hashlib.sha256(data).hexdigest()[:8]}.{ext}"


def main() -> None:
    index = DIST / "index.html"
    html = index.read_text(encoding="utf-8")
    js_name = re.search(r'src="/assets/(index-[^"]+\.js)"', html).group(1)
    css_name = re.search(r'href="/assets/(index-[^"]+\.css)"', html).group(1)
    js = (DIST / "assets" / js_name).read_text(encoding="utf-8")
    css = (DIST / "assets" / css_name).read_text(encoding="utf-8")

    # Remove an earlier copy of the section, then add the current one.
    js = strip_between(js, JS_START, JS_END).replace(NAV_LINK, "")
    css = strip_between(css, CSS_START, CSS_END)

    markup = " ".join(line.strip() for line in (SECTION / "section.html").read_text(encoding="utf-8").splitlines() if line.strip())
    component = (f'{JS_START}const ToolsSectionHtml={json.dumps(markup, ensure_ascii=False)};'
                 'function ToolsSection(){return S.jsx("section",{className:"tl-section",id:"tools","aria-label":"أدوات صابر جروب",'
                 f'dangerouslySetInnerHTML:{{__html:ToolsSectionHtml}}}})}}{JS_END}')
    if js.count("function Vm(){") != 1 or js.count(AFTER_PROGRAMS) != 1:
        fail("the bundle changed: the page component or the #system section was not found once")
    js = js.replace("function Vm(){", component + "function Vm(){", 1)
    js = js.replace(AFTER_PROGRAMS, f"{JS_START}S.jsx(ToolsSection,{{}}),{JS_END}" + AFTER_PROGRAMS, 1)
    n = js.count(NAV_AFTER)
    if n < 1:
        fail("the menu link to #programs was not found")
    js = js.replace(NAV_AFTER, NAV_AFTER + NAV_LINK)

    section_css = (SECTION / "section.css").read_text(encoding="utf-8")
    css = css.rstrip() + "\n" + CSS_START + section_css + CSS_END + "\n"

    new_js, new_css = hashed(js_name, js.encode()), hashed(css_name, css.encode())
    for old, new, data in ((js_name, new_js, js), (css_name, new_css, css)):
        if old != new:
            (DIST / "assets" / old).unlink()
        (DIST / "assets" / new).write_text(data, encoding="utf-8")
        html = html.replace(f"/assets/{old}", f"/assets/{new}")
    index.write_text(html, encoding="utf-8")
    print(f"add-tools-section: {new_js}, {new_css} ({n} menu links)")


if __name__ == "__main__":
    main()
