# Saber Group Landing Page

Landing page for Saber Group Courses Academy, live at https://sabergroupacademy.com/.

`dist/` is the production build that goes live: every push to `main` uploads it to Hostinger
(see below). To change the site, replace the contents of `dist/` with a new build and push.
`src/` holds an older version of the React/Vite source; the deploy does not rebuild it.

## Saber Group Tools section (#tools)

The section about our own apps (HORIX now, the Lightroom, Illustrator, Premiere and After Effects
alternatives on the way) lives in `sections/tools/` (`section.html`, `section.css`; images in
`dist/assets/tools/`). It is added to the built bundle, after the programs section, with an
"أدواتنا" link in the header and footer menus:

```bash
python3 -I scripts/add-tools-section.py
```

Run it again after editing the HTML or CSS: it replaces the previous copy and renames the JS and CSS
files with a new hash so browsers load the update. When `dist/` is replaced by a new build of the
site, run it once more (or add the section to that source).

## Local development

```bash
npm install
npm run dev
```


## GitHub Actions deploy

The workflow at `.github/workflows/deploy-hostinger.yml` uploads `dist/` to Hostinger on every push to `main`, then checks that the live site serves the new build. It only replaces files it uploaded itself, so WordPress and the subdomain folders in `public_html` stay untouched.

Add these repository secrets in GitHub:

- `HOSTINGER_FTP_SERVER`: FTP hostname from Hostinger.
- `HOSTINGER_FTP_USERNAME`: FTP username.
- `HOSTINGER_FTP_PASSWORD`: FTP password.
- `HOSTINGER_FTP_SERVER_DIR`: usually `/public_html/` for the main domain, or the domain folder shown in Hostinger File Manager.
