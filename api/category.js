import fetch from "node-fetch";
import { cors } from "../middleware/cors";

export default async function handler(req, res) {
  const country = req.query.country || "us";
  const category = req.query.category || "technology";

  if (cors(req, res)) return;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category news" });
  }
}
