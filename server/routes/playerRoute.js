const router = require("express").Router();

const {
  createPlayer,
  getAllPlayers,
  removePlayer,
  editPlayer
} = require("./../controller/playerController");

router
  .route("/")
  .get(getAllPlayers)
  .post(createPlayer);

router.route("/:id").delete(removePlayer);
router.route("/edit/:id").patch(editPlayer);
module.exports = router;
