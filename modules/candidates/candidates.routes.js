const router = require("express").Router();
const candidates = require("./candidates.middlewares");

router.route("/candidate").get(candidates.getCandidates);


module.exports = router;
