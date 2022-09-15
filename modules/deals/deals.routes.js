const router = require("express").Router();
const deals = require("./deals.middlewares");
const tvShows = require("../tv_shows/tv_shows.middlewares");

router.route("/deals").get(deals.getAllDeals);
router.route("/deal/:id").get(deals.getDealById);

module.exports = router;