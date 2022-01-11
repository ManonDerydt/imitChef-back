const router = require("express").Router();
const tvShows = require("./tv_shows.middlewares");

router.route("/show").get(tvShows.getAllShow);

router.route("/show/:showId").get(tvShows.getAllShowById);

module.exports = router;
