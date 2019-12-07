const router = require("express").Router();

const {
  createPlayer,
  getAllPlayers,
  removePlayer
} = require("./../controller/playerController");

router
  .route("/")
  .get(getAllPlayers)
  .post(createPlayer);

router.route("/:id").delete(removePlayer);
module.exports = router;
