const express = require("express");
const app = express();

app.use(express.json());

/**
 * Player API
 * Player Router
 */
const playerRoutes = require("./routes/playerRoute");

app.use("/api/player", playerRoutes);

module.exports = app;
