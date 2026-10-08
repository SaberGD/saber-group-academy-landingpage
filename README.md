# Saber Group Landing Page

Landing page for Saber Group Courses Academy, live at https://sabergroupacademy.com/.

`dist/` is the production build that goes live: every push to `main` uploads it to Hostinger
(see below). To change the site, replace the contents of `dist/` with a new build and push.
`src/` holds an older version of the React/Vite source; the deploy does not rebuild it.

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
