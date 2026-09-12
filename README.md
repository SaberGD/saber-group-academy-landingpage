# Saber Group Landing Page

React/Vite landing page for Saber Group Courses Academy.

## Local development

```bash
npm install
npm run dev
```

## Hostinger upload

```bash
npm run build
```

Upload the contents of the generated `dist/` folder to Hostinger `public_html`.

## GitHub Actions deploy

The workflow at `.github/workflows/deploy-hostinger.yml` builds the site and uploads `dist/` to Hostinger on every push to `main`.

Add these repository secrets in GitHub:

- `HOSTINGER_FTP_SERVER`: FTP hostname from Hostinger.
- `HOSTINGER_FTP_USERNAME`: FTP username.
- `HOSTINGER_FTP_PASSWORD`: FTP password.
- `HOSTINGER_FTP_SERVER_DIR`: usually `/public_html/` for the main domain, or the domain folder shown in Hostinger File Manager.
