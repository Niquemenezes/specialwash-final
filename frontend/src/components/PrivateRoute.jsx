import { Navigate } from "react-router-dom";


export default function PrivateRoute({ children, roles }) {
const token = sessionStorage.getItem("token");
const user = JSON.parse(sessionStorage.getItem("user") || "null");
if (!token || !user) return <Navigate to="/login" replace />;
if (roles && !roles.includes(user.role)) return <Navigate to="/login" replace />;
return children;
}