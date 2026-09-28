import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Actions publishes this repo at https://blueviper1394.github.io/mywebapp/
// Local `npm run dev` stays at the site root.
const base = process.env.GITHUB_ACTIONS ? "/mywebapp/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
