const router = require("express").Router();
const deals = require("./deals.middlewares");

router.route("/deals").get(deals.getAllDeals);

module.exports = router;