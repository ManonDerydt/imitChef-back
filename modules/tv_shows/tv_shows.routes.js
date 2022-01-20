const router = require("express").Router();
const tvShows = require("./tv_shows.middlewares");

router.route("/show").get(tvShows.getAllShow);

router.route("/show/:id").get(tvShows.getShow);

module.exports = router;
