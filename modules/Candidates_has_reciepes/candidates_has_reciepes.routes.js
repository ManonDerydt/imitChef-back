const router = require("express").Router();
const candidate_has_reciepes = require("./candidates_has_reciepes.middlewares");

router.route("/getCandidateByShowId").get(candidate_has_reciepes.getReciepesByCandidate);

module.exports = router;
