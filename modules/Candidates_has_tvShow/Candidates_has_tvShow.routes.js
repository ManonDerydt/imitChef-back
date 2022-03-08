const router = require("express").Router();
const Candidates_has_tvShow = require("./Candidates_has_tvShow.middlewares");

router.route("/getCandidateByShowId").get(Candidates_has_tvShow.getAllCandidatesByShow);

module.exports = router;
