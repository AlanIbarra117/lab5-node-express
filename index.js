import express from "express";
import path from "node:path";

const app = express();
const port = 3000;

// Serve static files (CSS, JS, images) from the public directory
app.use(express.static(path.join(import.meta.dirname, "public")));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
