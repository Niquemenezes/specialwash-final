# backend/routes/__init__.py
from flask import Blueprint

# Blueprint raíz de la API (prefijo /api se añade en app.py)
api = Blueprint("api", __name__)

# Importa módulos que definen endpoints sobre `api`
# (importa al final para evitar importaciones circulares)
from . import auth, products  # noqa: E402,F401
