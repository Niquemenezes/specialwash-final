from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from ..db import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(40), nullable=False, default="empleado") # administrador | empleado
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


def set_password(self, raw):
    self.password_hash = generate_password_hash(raw)


def check_password(self, raw):
    return check_password_hash(self.password_hash, raw)


def to_dict(self):
    return {"id": self.id, "email": self.email, "role": self.role}