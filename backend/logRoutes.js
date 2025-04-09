const express = require("express");
const pool = require("../database");
const router = express.Router();

// Store user activity logs
router.post("/logs", async (req, res) => {
  try {
    const { user_id, url, duration } = req.body;
    if (!user_id || !url || !duration) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await pool.query(
      "INSERT INTO logs (user_id, url, duration) VALUES ($1, $2, $3)",
      [user_id, url, duration]
    );

    res.status(201).json({ message: "Log stored successfully" });
  } catch (err) {
    console.error("Error storing log:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
