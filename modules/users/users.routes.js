const router = require("express").Router();
const users = require("./users.middlewares");

router.route("/users").post(users.createUsers);
router.route("/users/login").post(users.loginUsers);

module.exports = router;
