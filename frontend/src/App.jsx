import { Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Admin from "./pages/Admin";


export default function App(){
return (
<>
<Navbar />
<Routes>
<Route path="/login" element={<Login/>} />
<Route path="/" element={
<PrivateRoute roles={["administrador","empleado"]}>
<Admin />
</PrivateRoute>
}/>
<Route path="*" element={<div style={{padding:16}}>404</div>} />
</Routes>
</>
);
}