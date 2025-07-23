from app.models import db, Pin, environment, SCHEMA
from sqlalchemy.sql import text

def seed_pins():
    pin1 = Pin(
        user_id=1,
        image_url='https://images.pexels.com/photos/1395305/pexels-photo-1395305.jpeg',
        title='Antique Pearl Ring',
        description='Diamonds and pearls together create a soft and enchanting aesthetic.',
        likes_count=3  # matches number of favorites for pin 1
    )
    pin2 = Pin(
        user_id=2,
        image_url='https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg',
        title='Floating Along',
        description='Boat gathering on the beautiful coast of Peru.',
        likes_count=1  # matches number of favorites for pin 2
    )
    pin3 = Pin(
        user_id=3,
        image_url='https://images.pexels.com/photos/3751675/pexels-photo-3751675.jpeg',
        title='Elephant Family',
        description='This pack of elephants are hanging out around watering hole, enjoying the sun',
        likes_count=1  # matches number of favorites for pin 3
    )
    pin4 = Pin(
        user_id=1,
        image_url='https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg',
        title='Cozy Reading Nook',
        description='Warm sunlight filters through the window onto a soft chair and stacked books.',
        likes_count=2  # matches number of favorites for pin 4
    )
    pin5 = Pin(
        user_id=2,
        image_url='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        title='Mountain Sunrise',
        description='A breathtaking view of the sun rising behind snow-capped peaks.',
        likes_count=4  # matches number of favorites for pin 5
    )
    pin6 = Pin(
        user_id=3,
        image_url='https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
        title='Rustic Kitchen',
        description='A charming wooden kitchen with copper pots and farmhouse decor.',
        likes_count=1  # matches number of favorites for pin 6
    )
    pin7 = Pin(
        user_id=1,
        image_url='https://images.pexels.com/photos/34950/pexels-photo.jpg',
        title='Vintage Camera',
        description='A classic black and silver camera placed on an old wooden table.',
        likes_count=3  # matches number of favorites for pin 7
    )
    pin8 = Pin(
        user_id=2,
        image_url='https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
        title='Autumn Pathway',
        description='Golden leaves scattered along a quiet park pathway.',
        likes_count=2  # matches number of favorites for pin 8
    )
    pin9 = Pin(
        user_id=3,
        image_url='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
        title='Tropical Paradise',
        description='Crystal clear waters and palm trees swaying under the sun.',
        likes_count=5  # matches number of favorites for pin 9
    )
    pin10 = Pin(
        user_id=1,
        image_url='https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg',
        title='Street Café',
        description='A quiet European café with outdoor seating and hanging lights.',
        likes_count=1  # matches number of favorites for pin 10
    )
    pin11 = Pin(
        user_id=2,
        image_url='https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg',
        title='Desert Dunes',
        description='Rolling golden sand dunes shaped by the wind.',
        likes_count=2  # matches number of favorites for pin 11
    )
    pin12 = Pin(
        user_id=3,
        image_url='https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
        title='Lavender Field',
        description='Endless rows of lavender under a pastel sunset sky.',
        likes_count=3  # matches number of favorites for pin 12
    )
    pin13 = Pin(
        user_id=1,
        image_url='https://images.pexels.com/photos/33126549/pexels-photo-33126549.jpeg',
        title='Urban Architecture',
        description='Modern skyscrapers reflecting the orange hues of sunset.',
        likes_count=4  # matches number of favorites for pin 13
    )
    pin14 = Pin(
        user_id=2,
        image_url='https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg',
        title='Snowy Cabin',
        description='A cozy log cabin surrounded by fresh snowfall.',
        likes_count=3  # matches number of favorites for pin 14
    )
    pin15 = Pin(
        user_id=3,
        image_url='https://images.pexels.com/photos/35600/road-sun-rays-path.jpg',
        title='Sunbeam Road',
        description='Sunlight breaking through the trees on a misty forest road.',
        likes_count=2  # matches number of favorites for pin 15
    )

    # Add pins to the session and commit
    db.session.add_all([pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10, pin11, pin12, pin13, pin14, pin15])
    db.session.commit()



def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pins"))
    db.session.commit()