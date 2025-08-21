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

  try {
    // Example: fetch news from external API
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
