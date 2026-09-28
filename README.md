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

The static files are written to `dist/`. Routes use a hash (`/#/home`) so the build can be hosted as static files, including GitHub Pages.
