import { useEffect, useState } from 'react';

export default function PrivateAdmin() {
  const [msg, setMsg] = useState('');
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  const token = sessionStorage.getItem('token') || '';

  const ping = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/ping`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setMsg(JSON.stringify(data, null, 2));
    } catch (e) {
      setMsg(e.message);
    }
  };

  useEffect(() => { /* opcional: probar al entrar */ /* ping(); */ }, []);

  return (
    <div style={{maxWidth: 900, margin: '10vh auto', padding: 24}}>
      <h2>Panel Admin</h2>
      <p>Bienvenida, <b>{user?.email}</b></p>
      <button onClick={ping}>Probar endpoint protegido</button>
      {msg && <pre style={{background:'#f7f7f7', padding:12, borderRadius:8, marginTop:12}}>{msg}</pre>}
    </div>
  );
}
