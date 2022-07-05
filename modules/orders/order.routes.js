const router = require("express").Router();
const orders = require("./order.middlewares");

module.exports = router;

router.route("/order/:id").get(orders.getOrder);