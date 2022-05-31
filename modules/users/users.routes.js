const router = require("express").Router();
const users = require("./users.middlewares");
const passport = require("passport");

router.route("/users").post(users.createUsers);
router.route("/users/login").post(users.loginUsers);

router.use("/users", passport.authenticate("jwt", {session: false}, null));

router.route("/users").get(users.getUsers);
router.route("/users/reciepes").get(users.reciepes);
// router.route("/users/account").get(users.users);

module.exports = router;
