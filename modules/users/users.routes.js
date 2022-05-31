const router = require("express").Router();
const users = require("./users.middlewares");
const passport = require("passport");

router.route("/users").post(users.createUsers);
router.route("/users/login").post(users.loginUsers);
router.route("/users/reciepes").get(passport.authenticate("jwt", {session: false}, null) ,users.reciepes);
router.route("/users").get(passport.authenticate("jwt", {session: false}, null) ,users.getUsers);
// router.route("/users/account").get(users.users);

module.exports = router;
