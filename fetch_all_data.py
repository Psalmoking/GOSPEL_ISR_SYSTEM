import sqlite3


def explore_database():
    # Establish a connection to thet existing database
    conn = sqlite3.connect("gospel_song.db")
    cursor = conn.cursor()

    # Basic Fetch (Retrieve the first 5 records)
    cursor.execute("SELECT * FROM tracks")

    # fetchall() grabs all the results from the executed query and returns them as a list of tuples
    results = cursor.fetchall()


    for index,row in enumerate(results, start=1):
        print(f"Record {index}: {row}\n")

    # ISR Keyword search (Search inside lyrics)
    search_term = "%praise"

    
    # Close connection when done reading
    conn.close()


if __name__ == "__main__":
    explore_database()
