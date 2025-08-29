const API = process.env.REACT_APP_API_URL || "";


export async function jsonFetch(path, { method = "GET", body, auth = true } = {}) {
const headers = { "Content-Type": "application/json" };
const token = sessionStorage.getItem("token");
if (auth && token) headers["Authorization"] = `Bearer ${token}`;
const res = await fetch(`${API}${path}`, {
method,
headers,
body: body ? JSON.stringify(body) : undefined,
});
if (!res.ok) throw new Error(`HTTP ${res.status}`);
return res.status !== 204 ? res.json() : null;
}