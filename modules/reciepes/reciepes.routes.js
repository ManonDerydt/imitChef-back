const router = require("express").Router();
const reciepes = require("./reciepes.middlewares");

module.exports = router;

// Etape 5 : Réception de la route du front
// router.route("/reciepe/:id").get(reciepes.getReciepeById);

router.route("/reciepe/:id").get(reciepes.getReciepe);