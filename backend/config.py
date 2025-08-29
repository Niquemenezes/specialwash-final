import os


class Config:
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "dev-secret")
    SQLALCHEMY_DATABASE_URI = (
    os.getenv("DATABASE_URL") or "sqlite:////tmp/specialwash.db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN", "*")
    ADMIN_SETUP_TOKEN = os.getenv("ADMIN_SETUP_TOKEN")