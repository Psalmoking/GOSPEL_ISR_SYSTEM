import sqlite3
import json


def setup_database():
    # Connect to SQLite database
    conn = sqlite3.connect("gospel_song.db")
    cursor = conn.cursor()

    # Create table with all requested metadata fields
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tracks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            year INTEGER, 
            genre TEXT,
            image TEXT,
            duration TEXT,
            album TEXT,
            release_date TEXT,
            lyrics_snippet TEXT,
            full_lyrics TEXT
        )               
    """)

    # Load dataset of 50 structured Gospel records from the external JSON file
    with open("data.json", "r", encoding="utf-8") as file:
        tracks_data = json.load(file)

    # Extrack values from the JSON objects into a list of tuples for SQLite
    tracks_tuples = [
        (
            track["title"],
            track["author"],
            track["year"],
            track["genre"],
            track["image"],
            track["duration"],
            track["album"],
            track["release_date"],
            track["lyrics_snippet"],
            track["full_lyrics"],
        )
        for track in tracks_data
    ]

    # Insert the data safely using parameterize queries
    cursor.executemany(
        """
        INSERT INTO tracks (title, author, year, genre, image, duration, album, release_date, lyrics_snippet, full_lyrics)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """,
        tracks_tuples,
    )

    # Commit and close
    conn.commit()
    conn.close()

    print(
        f"Success: {len(tracks_tuples)} tracks loaded from JSON and inserted into 'gospel_song.db'!"
    )


if __name__ == "__main__":
    setup_database()
