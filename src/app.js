const express = require("express");
const app = express();

const Items = require("warframe-items");

const all = new Items();
const primary = new Items({ category: ["Primary"] });
const pets = new Items({ category: ["Pets"] });
const mods = new Items({ category: ["Mods"] });
const arcanes = new Items({ category: ["Arcanes"] });
const archwing = new Items({ category: ["Archwing"] });
const archGun = new Items({ category: ["Arch-Gun"] });
const archMelee = new Items({ category: ["Arch-Melee"] });
const enemy = new Items({ category: ["Enemy"] });
const fish = new Items({ category: ["Fish"] });
const gear = new Items({ category: ["Gear"] });
const glyphs = new Items({ category: ["Glyphs"] });
const melee = new Items({ category: ["Melee"] });
const misc = new Items({ category: ["Misc"] });
const quests = new Items({ category: ["Quests"] });
const relics = new Items({ category: ["Relics"] });
const resources = new Items({ category: ["Resources"] });
const secondary = new Items({ category: ["Secondary"] });
const sentinels = new Items({ category: ["Sentinels"] });
const sigils = new Items({ category: ["Sigils"] });
const skins = new Items({ category: ["Skins"] });
const warframes = new Items({ category: ["Warframes"] });

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
