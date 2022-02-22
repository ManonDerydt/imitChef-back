const router = require("express").Router();
const reciepes = require("./reciepes.middlewares");

module.exports = router;

router.route("/reciepe/:id").get(reciepes.getReciepeById);

router.route("/reciepe").get(reciepes.getReciepe);