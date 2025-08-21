import fetch from "node-fetch";
import { cors } from "../middleware/cors";
export default async function handler(req, res) {
  const query = req.query.q || "technology";

  if (cors(req, res)) return;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to search news" });
  }
}
