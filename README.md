# Users table sign-in

React app (Vite) that signs in by matching `username` and `password` against the `public.users` table in Supabase.

## Run locally

```powershell
npm install
npm run dev
```

Open the URL Vite prints, usually `http://127.0.0.1:5173`.

A matching row shows **Login successful**. Any other username or password shows **Login failed**.

## Configuration

Copy `.env.example` to `.env` if needed. This project already has `.env` filled with the project URL and the publishable key:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The table needs a Select policy that allows the publishable key to read rows. Do not put the secret key in this project.

## Production build

```powershell
npm run build
npm run preview
```

The static files are written to `dist/`. Routes use a hash (`/#/home`) so the published site does not need a server rewrite.

## GitHub Pages

The site is published from the `dist` folder by `.github/workflows/pages.yml` on every push to `master` or `main`. The public URL is:

https://blueviper1394.github.io/mywebapp/

In the GitHub repository, change one setting before the first deploy:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**. Do not use **Deploy from a branch**. A branch deploy serves the React source, not the built site.
3. Commit and push these files to `master`. The workflow **Deploy to GitHub Pages** runs from the **Actions** tab.
4. When that workflow is green, open https://blueviper1394.github.io/mywebapp/

`.env` is part of the repo, so the Actions build picks up the Supabase URL and publishable key. No extra secret is required for this key.
