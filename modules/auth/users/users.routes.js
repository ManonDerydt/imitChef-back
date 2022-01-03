const router = require("express").Router();
const users = require("./users.middlewares");


router.route("/users").post(users.createUsers);

module.exports = router;
