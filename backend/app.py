# backend/app.py
from flask import Flask, jsonify
from .config import Config
from .db import db
from .routes import api            # <- ahora sí existe 'api'
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db, compare_type=True)
    JWTManager(app)

    app.register_blueprint(api, url_prefix="/api")

    @app.get("/health")
    def health():
        return jsonify(ok=True)
    return app
