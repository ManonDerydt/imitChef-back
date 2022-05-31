const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:users");
const bcryptService = require(path.resolve("./services/bcrypt"))
const jwt = require("jsonwebtoken");
const passport = require("passport");

exports.createUsers = (req, res, next) => {
    debug("createUser");

    const {password, email, lastname, firstname} = req.body;

    return execute()
        .then(() => {
            res.json({"Ok": true});
        })
        .catch((err) => {
            if (err.message === "UNIQUE_EMAIL") {
                return res.status(401).json({message: "L'adresse email est déjà utilisée"})
            }
            next(err)
        });

    async function execute() {
        try {
            const hashPassword = await bcryptService.hashPassword(password)
            const user = {
                password: hashPassword,
                email: email,
                lastname: lastname,
                firstname: firstname
            }
            return await models.User.create(user);
        } catch (err) {
            if (err.name === "SequelizeUniqueConstraintError") {
                throw Error("UNIQUE_EMAIL")
            }
            throw (err);
        }
    }
}

exports.loginUsers = (req, res, next) => {
    debug("loginUsers");

    return execute()
        .then(user => res.json(user))
        .catch((err) => {
            if (err === "NO_USER") {
                res.status(403).json({message: "Authentification échouée"});
            } else {
                next(err);
            }
        });

    async function execute() {
        try {
            const user = await new Promise(logUserWithPassport);
            const token = await generateJWT(user)
            return {user, token};

        } catch (err) {
            throw (err);
        }

        function logUserWithPassport(resolve, reject) {
            passport.authenticate("local", {session: false}, (err, user, info) => {
                if (err || !user) {
                    return reject(info.message);
                }
                console.log(user);
                return resolve(user);
            })(req, res, next)
        }

        function generateJWT(user) {
            return new Promise((resolve, reject) => {
                req.login(user, {session: false}, async (err) => {
                    if (err) {
                        reject(err);
                    }
                    const {id, email} = user;
                    const token = await jwt.sign({id, email}, process.env.JWT_SECRET);
                    return resolve(token)
                });
            })
        }
    }
}

exports.reciepes = (req, res, next) => {
    debug('reciepes')

    return execute()
        .then(reciepes => res.json(reciepes))
        .catch(err => next(err));

    async function execute() {
        try {
            return req.user.getReciepes();

        } catch (error) {
            throw error;
        }
    }
}


exports.getUsers = (req, res, next) => {
    debug('getUsers')

    return execute()
        .then(users => res.json(users))
        .catch(err => next(err));

    async function execute() {
        try {
            return req.user;

            } catch (error) {
            throw error;
        }
    }
}


// exports.users = (req, res, next) => {
//     debug('users')
//
//     return execute()
//         .then(users => res.json(users))
//         .catch(err => next(err));
//
//     async function execute() {
//         try {
//             return await models.User.findByPk(req.user.id, {attributes: ["id"]});
//
//         } catch (error) {
//             throw error;
//         }
//     }
// }
