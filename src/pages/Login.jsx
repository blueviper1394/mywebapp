import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isConfigured, supabase } from "../lib/supabase";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loggedInUser")) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  async function onSubmit(event) {
    event.preventDefault();
    setMessage("");

    const name = username.trim();
    if (!name || !password) {
      setMessage("Login failed");
      return;
    }

    setBusy(true);
    const { data, error } = await supabase
      .from("users")
      .select("username")
      .eq("username", name)
      .eq("password", password)
      .maybeSingle();
    setBusy(false);

    if (error || !data) {
      setMessage("Login failed");
      return;
    }

    sessionStorage.setItem("loggedInUser", data.username);
    navigate("/home");
  }

  return (
    <main className="shell">
      <section className="card">
        <h1>Sign in</h1>
        <p className="lede">Enter a username and password from the users table.</p>

        {!isConfigured && (
          <div className="callout">
            Add your project URL and publishable key in <code>.env</code>, then restart the dev server.
          </div>
        )}

        {message && <p className="message error">{message}</p>}

        {isConfigured && (
          <form onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button type="submit" disabled={busy}>
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
