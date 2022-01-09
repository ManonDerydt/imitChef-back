const router = require("express").Router();
const tvShows = require("./tv_shows.middlewares");

router.route("/show").get(tvShows.getAllShow);

module.exports = router;
