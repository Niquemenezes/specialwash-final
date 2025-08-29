import { useState } from "react";
import { jsonFetch } from "../api";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


const submit = async (e) => {
e.preventDefault();
setError("");
try {
const data = await jsonFetch("/api/auth/login", {
method: "POST",
auth: false,
body: { email, password },
});
sessionStorage.setItem("token", data.access_token);
sessionStorage.setItem("user", JSON.stringify(data.user));
window.location.href = "/";
} catch (err) {
setError("Login inválido");
}
};


return (
<div style={{ maxWidth: 360, margin: "60px auto" }}>
<h2>Entrar</h2>
<form onSubmit={submit}>
<input
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={{ width: "100%", marginBottom: 8 }}
/>
<input
placeholder="Password"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
style={{ width: "100%", marginBottom: 8 }}
/>
{error && <div style={{ color: "red" }}>{error}</div>}
<button type="submit">Entrar</button>
</form>
</div>
);
}