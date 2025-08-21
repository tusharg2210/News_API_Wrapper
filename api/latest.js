import fetch from "node-fetch";

export default async function handler(req, res) {
  const query = req.query.q || "breaking-news";

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch latest news" });
  }
}
