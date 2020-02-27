const express = require("express");
const app = express();
const cors = require("cors");

const Items = require("warframe-items");

const all = new Items();
const primary = new Items({ category: ["Primary"] });
const pets = new Items({ category: ["Pets"] });
const mods = new Items({ category: ["Mods"] });
const warframes = new Items({ category: ["Warframes"] });
const melee = new Items({ category: ["Melee"] });
const secondary = new Items({ category: ["Secondary"] });
const sentinels = new Items({ category: ["Sentinels"] });
const arcanes = new Items({ category: ["Arcanes"] });
const archwing = new Items({ category: ["Archwing"] });
const archGun = new Items({ category: ["Arch-Gun"] });
const archMelee = new Items({ category: ["Arch-Melee"] });
const enemy = new Items({ category: ["Enemy"] });

// const fish = new Items({ category: ["Fish"] });
// const gear = new Items({ category: ["Gear"] });
// const glyphs = new Items({ category: ["Glyphs"] });
// const misc = new Items({ category: ["Misc"] });
// const quests = new Items({ category: ["Quests"] });
// const relics = new Items({ category: ["Relics"] });
// const resources = new Items({ category: ["Resources"] });
// const sigils = new Items({ category: ["Sigils"] });
// const skins = new Items({ category: ["Skins"] });

app.use(cors());

app.get("/api/warframe/", (req, res) => {
  res.send(all);
});

app.get("/api/warframe/pets", (req, res) => {
  res.send(pets);
});

app.get("/api/warframe/mods", (req, res) => {
  res.send(mods);
});

app.get("/api/warframe/primary", (req, res) => {
  res.send(primary);
});


app.get("/api/warframe/warframes", (req, res) => {
  res.send(warframes);
});

app.get("/api/warframe/melee", (req, res) => {
  res.send(melee);
});

app.get("/api/warframe/secondary", (req, res) => {
  res.send(secondary);
});

app.get("/api/warframe/sentinels", (req, res) => {
  res.send(sentinels);
});

app.get("/api/warframe/arcanes", (req, res) => {
  res.send(arcanes);
});

app.get("/api/warframe/archwing", (req, res) => {
  res.send(archwing);
});

app.get("/api/warframe/archgun", (req, res) => {
  res.send(archGun);
});

app.get("/api/warframe/archmelee", (req, res) => {
  res.send(archMelee);
});

app.get("/api/warframe/enemy", (req, res) => {
  res.send(enemy);
});

app.listen(3000);
