const express = require("express");
const app = express();

const Items = require("warframe-items");

const primary = new Items({ category: ["Primary"] });
const pets = new Items({ category: ["Pets"] });
const mods = new Items({ category: ["Mods"] });

app.get("/api/warframe/pets", (req, res) => {
  res.send(pets);
});

app.get("/api/warframe/mods", (req, res) => {
  res.send(mods);
});

app.get("/api/warframe/primary", (req, res) => {
  res.send(primary);
});

app.listen(3000);
