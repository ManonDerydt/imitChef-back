const router = require("express").Router();
const gallery = require("./gallery.middlewares");

router.route("/gallery").get(gallery.getGallery);

module.exports = router;