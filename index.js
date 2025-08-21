import express from "express";
import dotenv from "dotenv";
import headlinesRoute from "./routes/headlines.js";
import searchRoute from "./routes/search.js";
import categoryRoute from "./routes/category.js";
import latestRoute from "./routes/latest.js";

dotenv.config();
const app = express();

app.use("/api/headlines", headlinesRoute);
app.use("/api/search", searchRoute);
app.use("/api/category", categoryRoute);
app.use("/api/latest", latestRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
