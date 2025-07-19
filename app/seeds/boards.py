from app.models import db, Board, environment, SCHEMA
from sqlalchemy.sql import text



def seed_boards():
    cute_dogs = Board(
        user_id=1, name='cute_dogs')
    cute_cats = Board(
        user_id=2, name='cute_cats')
    patio_furniture = Board(
        user_id=3, name='patio_furniture')
    home_office = Board(
        user_id=1, name='home_office')
    camping_gear = Board(
        user_id=2, name='camping_gear')
    minimalist_design = Board(
        user_id=3, name='minimalist_design')
    tech_gadgets = Board(
        user_id=1, name='tech_gadgets')
    wedding_ideas = Board(
        user_id=2, name='wedding_ideas')
    book_recommendations = Board(
        user_id=3, name='book_recommendations')

    db.session.add_all([
        cute_dogs,
        cute_cats,
        patio_furniture,
        home_office,
        camping_gear,
        minimalist_design,
        tech_gadgets,
        wedding_ideas,
        book_recommendations
    ])
    db.session.commit()



def undo_boards():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.boards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM boards"))
        
    db.session.commit()