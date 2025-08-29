# backend/routes/products.py
from functools import wraps
from flask import jsonify, request
from flask_jwt_extended import verify_jwt_in_request, get_jwt
from . import api  # <- usar el blueprint 'api'

def role_required(allowed_roles: set[str]):
    allowed = {r.lower() for r in allowed_roles}
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            rol = (claims.get("rol") or claims.get("role") or "").lower()
            if rol not in allowed:
                return jsonify(msg="Forbidden: role not allowed"), 403
            return fn(*args, **kwargs)
        return wrapper
    return decorator

@api.get("/productos")
@role_required({"administrador"})
def productos_list():
    # Demo sin DB para validar wiring
    return jsonify([{"id": 1, "nombre": "Champú"}])
