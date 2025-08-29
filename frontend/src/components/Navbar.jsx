import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
const nav = useNavigate();
const user = JSON.parse(sessionStorage.getItem("user") || "null");
return (
<nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
<Link to="/">Inicio</Link>
{user && <span style={{ marginLeft: 12 }}>({user.email} · {user.role})</span>}
<button
style={{ float: "right" }}
onClick={() => {
sessionStorage.clear();
nav("/login");
}}
>Salir</button>
</nav>
);
}