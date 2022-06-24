const router = require("express").Router();
const restaurants = require("./restaurants.middlewares");

router.route("/restaurant/:id").get(restaurants.getRestaurant);

module.exports = router;