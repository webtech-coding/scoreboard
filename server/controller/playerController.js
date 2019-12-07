const Player = require("./../model/Player");

const createPlayer = async (req, res) => {
  const { name, age, score } = req.body;
  try {
    const player = await Player.create({ name, age, score });

    res.status(201).json({
      msg: "successful",
      player
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getAllPlayers = async (req, res) => {
  const { orderBy } = req.query;
  let sort = [];
  switch (orderBy) {
    case "asc":
      sort = ["score", 1];
      break;
    case "desc":
      sort = ["score", -1];
      break;
    default:
      sort = [];
      break;
  }
  try {
    const players = await Player.find().sort([sort]);
    res.status(200).json({
      players
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const removePlayer = async (req, res) => {
  const { id } = req.params;

  try {
    await Player.findByIdAndRemove(id);
    res.status(200).json({
      msg: "successful"
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { createPlayer, getAllPlayers, removePlayer };
