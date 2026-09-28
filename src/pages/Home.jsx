import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("loggedInUser");
    if (!saved) {
      navigate("/", { replace: true });
      return;
    }
    setUsername(saved);
  }, [navigate]);

  function signOut() {
    sessionStorage.removeItem("loggedInUser");
    navigate("/", { replace: true });
  }

  if (!username) {
    return (
      <main className="shell">
        <section className="card wide">
          <p className="gate">Checking session…</p>
        </section>
      </main>
    );
  }

  return (
    <main className="shell">
      <section className="card wide">
        <h1>Login successful</h1>
        <p className="lede">The username and password matched a row in the users table.</p>
        <dl className="meta">
          <div>
            <dt>Username</dt>
            <dd>{username}</dd>
          </div>
        </dl>
        <button className="secondary" type="button" onClick={signOut}>
          Sign out
        </button>
      </section>
    </main>
  );
}
