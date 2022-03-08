const router = require("express").Router();
const candidates = require("./candidates.middlewares");
const Candidates_has_tvShow = require("../Candidates_has_tvShow/Candidates_has_tvShow.middlewares");

router.route("/candidates").get(candidates.getCandidates);

router.route("/candidateByShow/:showId").get(candidates.getCandidatesByShow);

module.exports = router;
