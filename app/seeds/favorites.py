from app.models import db, Favorite, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a favorite, you can add other favorites here if you want
def seed_favorites():
    fav1 = Favorite(
        user_id=1, pin_id=1)
    fav2 = Favorite(
        user_id=2, pin_id=1)
    fav3 = Favorite(
        user_id=3, pin_id=1)

    db.session.add(fav1)
    db.session.add(fav2)
    db.session.add(fav3)
    db.session.commit()



def undo_favorites():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM favorites"))
        
    db.session.commit()