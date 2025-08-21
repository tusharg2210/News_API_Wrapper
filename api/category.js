import fetch from "node-fetch";

export default async function handler(req, res) {
  // ✅ Add CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*"); // or "http://localhost:3000"
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const country = req.query.country || "us";
  const category = req.query.category || "technology";

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
