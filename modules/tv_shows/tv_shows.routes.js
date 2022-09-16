const router = require("express").Router();
const tvShows = require("./tv_shows.middlewares");
const candidates = require("../candidates/candidates.middlewares");
const gallery = require("../gallery/gallery.middlewares");

router.route("/show").get(tvShows.getAllShow);
router.route("/show/:id").get(tvShows.getShow);
router.route("/gallery").get(gallery.getGallery)
// router.route("/candidatesByShow").get(tvShows.getCandidatesByShow);

module.exports = router;
