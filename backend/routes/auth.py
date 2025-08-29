# backend/routes/auth.py
from flask import jsonify, request
from flask_jwt_extended import create_access_token
from . import api  # <- IMPORTANTE: usar el blueprint 'api'

@api.get("/ping")
def ping():
    return jsonify(pong=True)

@api.post("/auth/login")
def login():
    data = request.get_json() or {}
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    # TODO: valida usuario real. Por ahora, demo:
    if email != "admin@specialwash.local" or password != "admin12345":
        return jsonify(ok=False, msg="Credenciales inválidas"), 401
    token = create_access_token(identity={"email": email}, additional_claims={"rol": "administrador"})
    return jsonify(ok=True, token=token)
