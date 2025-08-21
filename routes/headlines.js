import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.get("/", async (req, res) => {
  const country = req.query.country || "us";

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY || process.env.NEWS_API_KEY_1}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch top headlines" });
  }
});

export default router;
