import sqlite3


def explore_database():
    # Establish a connection to thet existing database
    conn = sqlite3.connect("gospel_song.db")
    cursor = conn.cursor()

    # Basic Fetch (Retrieve the first 5 records)
    cursor.execute("SELECT * FROM tracks LIMIT 5")

    # fetchall() grabs all the results from the executed query and returns them as a list of tuples
    basic_results = cursor.fetchall()

    # print(f"BASIC RESULT: {basic_results}")

    # for row in basic_results:
    #     print(f"{row}\n")

    # ISR Keyword search (Search inside lyrics)
    search_term = "%praise"

    # Use a parameterized query (?, (search_term,)) to prevent SQL injection vulnerabilities
    cursor.execute(
        "SELECT title, author FROM tracks WHERE full_lyrics LIKE ?", (search_term,)
    )

    search_results = cursor.fetchall()

    if search_results:
        for match in search_results:
            print(f"Match found: '{match[0]}' by {match[1]}")
        print(f"Total matches: {len(search_results)}")
    else:
        print("No matches found")
    
    # Close connection when done reading
    conn.close()


if __name__ == "__main__":
    explore_database()
