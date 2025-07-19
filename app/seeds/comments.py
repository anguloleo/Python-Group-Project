from app.models import db, Comment, environment, SCHEMA
from datetime import datetime
from sqlalchemy.sql import text

def seed_comments():
    comment1 = Comment(user_id=1, pin_id=1, text="Nice post!", created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    comment2 = Comment(user_id=2, pin_id=1, text="Love this idea!", created_at=datetime.utcnow(), updated_at=datetime.utcnow())

    db.session.add_all([comment1, comment2])
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))
        
    db.session.commit()