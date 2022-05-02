const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const models = require("models");

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload, cb) => {

        try {
            const user = models.User.findByPk(jwtPayload.id);
            return cb(null, user)
        } catch(error) {
            return cb(error)
        }
    }
));