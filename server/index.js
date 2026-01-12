import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import { readFile } from "fs/promises";

// Load characters from JSON file
let characters = [];
try {
  const data = await readFile(
    path.join(__dirname, "characters_data.json"),
    "utf8"
  );
  characters = JSON.parse(data).map((char, index) => ({
    id: index + 1,
    ...char,
  }));
} catch (error) {
  console.error("Error loading characters:", error);
  // Fallback characters if file fails to load
  characters = [
    {
      id: 1,
      name: "Satoru Gojo",
      description: "Satoru Gojo is the strongest jujutsu sorcerer.",
      image: "http://localhost:5000/img/Satoru Gojo.png",
    },
  ];
}

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.use(
  "/img",
  express.static(path.join(__dirname, "../jujutsu/src/Components/img"))
);

const video = [
  {
    id: 1,
    name: "jujutsu kaisen trailer",
    description:
      "This jujutsu kaisen trailer is a must watch for all the fans of the series",
    video: "http://localhost:5000/video/Video jujutsu kaisen.mp4",
  },
];

app.get("/api/video", (req, res) => {
  res.json(video);
});

app.use(
  "/video",
  express.static(path.join(__dirname, "../jujutsu/src/Components/video"))
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
