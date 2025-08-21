import fetch from "node-fetch";

export default async function handler(req, res) {
  const country = req.query.country || "us";

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch top headlines" });
  }
}
