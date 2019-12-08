const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the player"]
  },
  age: {
    type: Number,
    required: [true, "Please provide age of the player"]
  },
  score: {
    type: Number,
    required: [true, "please provide the score of the player"],
    default: 0
  },
  avatar: {
    type: String
  }
});

const Player = mongoose.model("player", PlayerSchema);
module.exports = Player;
