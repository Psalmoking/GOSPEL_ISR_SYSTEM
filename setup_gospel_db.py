import sqlite3
import random

def create_gospel_db():
    # Connect to (or create) the SQLite database file
    conn = sqlite3.connect("gospel_music.db")
    cursor = conn.cursor()
    
    # Create the table based on our new schema
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tracks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            song_title TEXT,
            artist TEXT,
            sub_genre TEXT,
            release_year INTEGER,
            lyrics_snippet TEXT,
            keywords TEXT
        )               
    ''')
    
    # Clear existing data if you run the script multiple times
    cursor.execute("DELETE FROM tracks")

    # Data pools to generate 50 unique records
    artists = [
       "Sinach", "Nathaniel Bassey", "Mercy Chinwo", "Dunsin Oyekan", "Kirk Franklin", "CeCe Winans", "Travis Greene", "Tasha Cobbs", "Don Moen", "Eben", "Frank Edwards", "Moses Bliss"
    ]
    
    titles_pool = ["Way Maker", "Olowogbogboro", "Excess Love", "Ifeoluwa", "My Trust", "Holy Spirit", "Great God", "Victory", "Praise the Lord", "Hallelujah Challenge", "Breathe", "Joyful Noise"]
    
    genres = ["Worship", "Praise", "Contemporary Gospel", "Traditional Gospel", "Afro-Gospel"]
    
    lyrics = [
        "You are here, moving in our midst...",
        "I will bless the Lord at all times...",
        "Your love is kind, your love is patient...",
        "Hallelujah to the King of Kings...",
        "Lord I lift your name on high...",
        "You have done so much for me...",
        "There is power in the name...",
        "Let the glory of the Lord rise among us..."
    ]
    
    keywords_pool = [
        "faith, hope, healing", "sunday, choir, upbeat", "worship, deep, spirit", "thanksgiving, joy, celebration", "prayer, morning, peace", "revival, power, glory"
    ]
    
    records = []
    
    # Generate exactly 50 records
    random.seed(42) # Seed ensures the same 50 records are generated every time
    for i in range(50):
        # Create a unique title by appending a variation for the sake of having 50  unique rows
        base_title = random.choice(titles_pool)
        title = f"{base_title} (Part {i%3 + 1})" if i> 11 else base_title
        
        artist = random.choice(artists)
        genre = random.choice(genres)
        year =  random.randint(2005,2024)
        snippet = random.choice(lyrics)
        keywords = random.choice(keywords_pool)

        records.append((title, artist, genre, year, snippet, keywords))

    # Insert all 50 records into the database
    cursor.executemany('''
        INSERT INTO tracks (song_title, artist, sub_genre, release_year, lyrics_snippet, keywords)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', records)

    # Commit the changes and close the connection
    conn.commit()
    conn.close()
    
    print("Success! 'gospel_music.db' has been created and populated with 50 records.")
    
if __name__ == "__main__":
    create_gospel_db()