# NewsAPI Wrapper Project

This is a **personal NewsAPI wrapper** that allows you to fetch news from [NewsAPI](https://newsapi.org/) securely without exposing your API key. It provides multiple endpoints for top headlines, search, category-based news, and latest news. This backend is designed for both **local development with Express** and **serverless deployment on Vercel**.

---

## Project Structure

```
news-wrapper/
├─ index.js           # Express server for local development
├─ package.json
├─ .env               # Local environment variables
├─ routes/            # Express routes
│    ├─ headlines.js
│    ├─ search.js
│    ├─ category.js
│    └─ latest.js
└─ api/               # Vercel serverless functions
├─ headlines.js
├─ search.js
├─ category.js
└─ latest.js
```

---

## Features / Endpoints

| Endpoint | Description | Example Query |
|----------|-------------|---------------|
| `/api/headlines` | Fetch top headlines | `/api/headlines?country=in` |
| `/api/search`    | Search news by query | `/api/search?q=bitcoin` |
| `/api/category`  | Fetch news by category | `/api/category?country=in&category=business` |
| `/api/latest`    | Fetch latest news articles | `/api/latest?q=ai` |

---

## Installation / Local Setup

1.  Clone the repository:
    ```bash
    git clone <repo-url>
    cd news-wrapper
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Create a `.env` file in the project root:
    ```
    NEWS_API_KEY=your_newsapi_key_here
    PORT=3000
    ```

4.  Run the local Express server:
    ```bash
    node index.js
    ```

5.  Open in your browser:
    ```
    http://localhost:3001/api/headlines?country=in
    ```

---

## Deployment on Vercel

1.  Install the Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2.  Login to Vercel:
    ```bash
    vercel login
    ```

3.  Deploy the project:
    ```bash
    vercel
    ```

4.  Set the environment variable in your Vercel project dashboard:
    `NEWS_API_KEY` = `your_newsapi_key_here`

After deployment, your endpoints will be available at a URL like:
`https://<your-vercel-app-name>.vercel.app/api/headlines`

---

## Notes

-   The `.env` file **must not be committed** to version control (ensure it's in your `.gitignore`).
-   This project can be used as a **backend for any frontend application** (e.g., React, Vue, Svelte, or plain HTML).
-   The Vercel serverless functions handle all API requests, keeping your API key secure on the server-side.

---

## License

This project is licensed under the MIT License.
