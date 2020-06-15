const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { Hero, heroes } = require("./heroes");

const PORT = process.env.PORT || "3210";

const app = express();

app.use(cors());
app.use(morgan("common"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  const search = req.query.search || "";
  if (search) {
    res.json(heroes.filter(h => h.match(search)));
  } else {
    res.json(heroes);
  }
});

app.post("/", async (req, res) => {
  const { name, abilities } = req.body;
  if (!name || !abilities || !Array.isArray(abilities)) {
    return res.status(400).json("BadRequest");
  }
  const newHero = new Hero(name, abilities);
  heroes.push(newHero);
  res.json(newHero);
});

console.log("STARTING APP ON PORT", PORT);
app.listen(PORT);
