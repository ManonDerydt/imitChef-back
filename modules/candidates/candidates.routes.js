const router = require("express").Router();
const candidates = require("./candidates.middlewares");

router.route("/candidates").get(candidates.getCandidates);
router.route("/candidates/:id").get(candidates.getCandidateById);
// Etape 5 : Réception de la route du front
router.route("/candidateByShow/:showId").get(candidates.getCandidatesByShow);

router.route("/candidatesOnclick").get(candidates.getReciepeByCandidateOnClick);

module.exports = router;
