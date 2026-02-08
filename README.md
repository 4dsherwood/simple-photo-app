# Simple Photo App

## Deploy to GitHub Pages

This project is already configured for static export and GitHub Pages.

1. Ensure the repository name matches the `basePath` in [next.config.js](next.config.js). If your repo name is different, update `basePath` accordingly.
2. Push to the `main` branch.
3. In GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow to finish. Your site will be available at:
	- `https://<your-username>.github.io/<repo-name>/`

Local build (optional):

- `npm install`
- `npm run build`

The static output will be generated in the `out/` directory.
