const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("../models");

passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    async (email, password, cb) => {
        try {
            const user = await models.User.findOne({
                attributes: ["id", "lastname", "firstname", "email"],
                where: {
                    email, password
                }
            });
            if (!user) {
                return cb(null, false, {message: "NO_USER"})
            }
            return cb(null, user, {message: "OK"})
        } catch (error) {
            return cb(error)
        }
    }
));