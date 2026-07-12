import sqlite3


def search_all_fields(search_text):
    # Connect to thet database
    conn = sqlite3.connect("gospel_song.db")

    # Configure the cursor to return rows as dictionaries which will be perfect for JSON/React
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # Format the search term for SQL's LIKE operator - The '%' wildcard means the text can be anywhere inside the field
    query_param = f"%{search_text}"

    # Construct the SQL query targeting all relevant text fields
    sql_query = """
        SELECT * FROM tracks
        WHERE title LIKE ? 
            OR author LIKE ?
            OR genre LIKE ?
            OR album LIKE ?
            OR release_date LIKE ?
            OR lyrics_snippet LIKE ?
            OR full_lyrics LIKE ?
    """

    # We need to pass the query_param for EVERY question mark in the SQL statement
    params = (
        query_param,
        query_param,
        query_param,
        query_param,
        query_param,
        query_param,
        query_param,
    )

    # Execute the query and fetch the results
    cursor.execute(sql_query, params)
    rows = cursor.fetchall()

    # Convert the sqlite3.Row objects into standard Python dictionaries
    results = [dict(row) for row in rows]

    conn.close()
    return results


# Test the implementation
if __name__ == "__main__":
    # Test 1: Search for a keyword that appears in lyrics
    term = "God is"
    print(f"\n Searching for: '{term}'")
    matches = search_all_fields(term)

    print(f"Found {len(matches)} record(s).")
    for match in matches:
        print(f"*** {match['title']} by {match['author']} (Genre: {match['genre']})")

    # Test 3: Search for an artist
    term = "James Cleveland"
    print(f"\nSearching for: '{term}'")
    matches = search_all_fields(term)

    print(f"Found {len(matches)} record(s).")
    for match in matches:
        print(f"*** {match['title']} from the album '{match['album']}'")
        print(f"\nMatch: {match}")
