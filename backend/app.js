const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

// ✅ Ensure PostgreSQL connection is properly configured
const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "task4",
    password: process.env.DB_PASSWORD ? String(process.env.DB_PASSWORD) : "123",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5433,
});

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Check database connection on startup
pool.connect()
    .then(() => console.log("✅ Connected to PostgreSQL"))
    .catch((err) => {
        console.error("❌ PostgreSQL connection error:", err.message);
        process.exit(1);
    });

// ✅ Endpoint to log time data
app.post("/api/logs", async (req, res) => {
    const { user_id, url, duration } = req.body;

    if (!user_id || !url || !duration) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const result = await pool.query(
            "INSERT INTO logs (user_id, url, duration) VALUES ($1, $2, $3) RETURNING *",
            [user_id, url, duration]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("❌ Database insert error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ Endpoint to retrieve logs
app.get("/api/logs", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM logs ORDER BY timestamp DESC");
        res.json(result.rows);
    } catch (err) {
        console.error("❌ Database fetch error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
