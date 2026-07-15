# Hallelu: Gospel Music Archive (ISR System)

A full-stack Information Storage and Retrieval (ISR) web application designed to query, filter, and display a curated database of gospel music. This project demonstrates a modern decoupled architecture, utilizing a RESTful Python/Flask API to interface with an SQLite database, and a dynamic React frontend to render the search interface and results.

## 🚀 Core Features
* **Robust Search Engine:** Query across multiple metadata fields simultaneously (Title, Artist, Album, and full lyrics).
* **Dynamic Filtering:** Filter the archive in real-time by database-generated musical genres.
* **Track Detail Views:** Explore comprehensive metadata, formatted lyrics, and algorithmically suggested related tracks.
* **Decoupled Architecture:** Clean separation of concerns between the frontend user interface and the backend data layer.

## 🛠️ Tech Stack
* **Frontend:** React, TypeScript, Tailwind CSS, TanStack Router
* **Backend:** Python, Flask, Flask-CORS
* **Database:** SQLite3

---

## 💻 Prerequisites
Ensure you have the following installed on your local development environment:
* **Node.js** (v16 or higher) and `npm`
* **Python** (3.8 or higher)

---

## ⚙️ Installation & Setup

**1. Clone the repository and navigate into the project directory:**
```bash
git clone <your-repository-url>
cd GOSPEL_ISR_SYSTEM
```

**2. Install Frontend Dependencies:**
```bash
npm install
```


**3. Install Backend Dependencies:**
```bash
pip install Flask flask-cors
```

**4. Verify the Database:**
Ensure the gospel_music.db file is present in the root directory. If it is missing, run your database seeding script to generate and populate the file.

## 🏃‍♂️ Running the Application
Because this system relies on a decoupled architecture, you must run the backend data server and the frontend client simultaneously. This requires two separate terminal windows.

**Terminal 1: Start the Backend API Server**
Navigate to the root directory of the project and start the Flask server. This process handles the SQL queries and serves the JSON data to the frontend.
```bash
python server.py
```
(The backend server will begin listening for requests, typically on http://127.0.0.1:5000)


**Terminal 2: Start the Frontend Client**
Leave the backend running, open a new terminal window in the same root directory, and start the Vite development server to launch the user interface.
```bash
npm run dev
```
(The terminal will provide a local web address, usually http://localhost:5173 or http://localhost:8080)