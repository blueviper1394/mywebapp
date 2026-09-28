import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL || "";
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const isConfigured =
  url.startsWith("https://") &&
  url.includes(".supabase.co") &&
  !url.includes("YOUR_PROJECT_REF") &&
  key.length > 20 &&
  key !== "YOUR_PUBLISHABLE_KEY";

export const supabase = isConfigured ? createClient(url, key) : null;
