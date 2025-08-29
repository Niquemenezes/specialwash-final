from datetime import datetime
from ..db import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    category = db.Column(db.String(80))
    min_stock = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


def to_dict(self):
    return {
    "id": self.id,
    "name": self.name,
    "category": self.category,
    "min_stock": self.min_stock,
}