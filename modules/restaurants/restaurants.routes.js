const router = require("express").Router();
const restaurants = require("./restaurants.middlewares");

console.log("Hello, je suis à la route restaurant !")
router.route("/restaurant/:id").get(restaurants.getRestaurant);

module.exports = router;