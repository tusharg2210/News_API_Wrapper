import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q || "breaking-news";

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY || process.env.NEWS_API_KEY_1}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch latest news" });
  }
});

export default router;
