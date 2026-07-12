from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
# CORS(app)  # This allows the Vite app to fetch data from Flask
CORS(app, resources={r"/api/*": {"origins": "*"}})


def get_db_connection():
    conn = sqlite3.connect("gospel_song.db")
    conn.row_factory = sqlite3.Row  # Returns dictionaries instead of tuples
    return conn


@app.route("/api/search", methods=["GET"])
def search_tracks():
    query = request.args.get("q", "").strip().lower()
    genre = request.args.get("genre", "all")

    conn = get_db_connection()
    cursor = conn.cursor()

    # Base SQL query
    sql = "SELECT * FROM tracks WHERE 1=1"
    params = []

    if genre and genre != "all":
        sql += " AND genre = ?"
        params.append(genre)

    if query:
        # Search across multiple fields (Title, Author, Album, Lyrics)
        search_term = f"%{query}%"
        sql += """ AND (
            LOWER(title) LIKE ? OR
            LOWER(author) LIKE ? OR
            LOWER(album) LIKE ? OR
            LOWER(lyrics_snippet) LIKE ? OR
            LOWER(full_lyrics) LIKE ?    
        )"""
        params.extend([search_term] * 5)

    cursor.execute(sql, params)
    rows = cursor.fetchall()
    conn.close()

    return jsonify([dict(row) for row in rows])


@app.route("/api/tracks/<int:track_id>", methods=["GET"])
def get_track(track_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tracks WHERE id = ?", (track_id))
    row = cursor.fetchone()
    conn.close()

    if row:
        return jsonify(dict(row))

    return jsonify({"Error": "Track not found"}), 404


@app.route("/api/genres", methods=["GET"])
def get_genres():
    conn = get_db_connection()
    cursor = conn.cursor()

    # DISTINCT tells SQLite to only return unique values
    cursor.execute("SELECT DISTINCT genre FROM tracks ORDER BY genre")
    rows = cursor.fetchall()
    conn.close()

    # Extract the genres from the dictionary rows into a simple flat list
    genres = [row["genre"] for row in rows if row["genre"]]

    return jsonify(genres)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
