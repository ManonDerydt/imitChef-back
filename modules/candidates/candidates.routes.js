const router = require("express").Router();
const candidates = require("./candidates.middlewares");
const Candidates_has_tvShow = require("../Candidates_has_tvShow/Candidates_has_tvShow.middlewares");

router.route("/candidates").get(candidates.getCandidates);
// Etape 5 : Réception de la route du front
router.route("/candidateByShow/:showId").get(candidates.getCandidatesByShow);

module.exports = router;
