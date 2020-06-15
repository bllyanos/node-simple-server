const express = require("express");
const cors = require("cors");

const { Hero, heroes } = require("./heroes");

const PORT = process.env.PORT || "3210";

const app = express();

app.use(cors());
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

app.listen(PORT);