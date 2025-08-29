import { useEffect, useState } from "react";
import { jsonFetch } from "../api";


export default function Admin() {
const [items, setItems] = useState([]);
const [form, setForm] = useState({ name: "", category: "", min_stock: 0 });


const load = async () => setItems(await jsonFetch("/api/products"));
useEffect(() => { load(); }, []);


const create = async () => {
await jsonFetch("/api/products", { method: "POST", body: form });
setForm({ name: "", category: "", min_stock: 0 });
load();
};


return (
<div style={{ padding: 16 }}>
<h2>Productos</h2>
<div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
<input placeholder="Nombre" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
<input placeholder="Categoría" value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}/>
<input placeholder="Stock mínimo" type="number" value={form.min_stock} onChange={(e)=>setForm({...form,min_stock:Number(e.target.value)})}/>
<button onClick={create}>Crear</button>
</div>
<table width="100%" border="1" cellPadding="6">
<thead><tr><th>ID</th><th>Nombre</th><th>Categoría</th><th>Min Stock</th></tr></thead>
<tbody>
{items.map(p => (
<tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.category}</td><td>{p.min_stock}</td></tr>
))}
</tbody>
</table>
</div>
);
}