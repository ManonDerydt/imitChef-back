const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:users");
const bcryptService = require(path.resolve("./services/bcrypt"))

exports.createUsers = (req, res, next) => {
    debug("createUser");

    const {password, email, lastname, firstname} = req.body;

    return execute()
        .then(() => {
            res.json({"Ok": true});
        })
        .catch((err) => {
            if( err.message === "UNIQUE_EMAIL"){
                return res.status(401).json({message : "L'adresse email est déjà utilisée"})
            }
            next(err)
        });

    async function execute() {
        try {
            const hashPassword = await bcryptService.hashPassword(password)
            const user = {
                password : hashPassword,
                email : email,
                lastname : lastname,
                firstname : firstname
            }
            return await models.User.create(user);
        }
        catch(err) {
            if(err.name === "SequelizeUniqueConstraintError"){
                throw Error("UNIQUE_EMAIL")
            }
            throw (err);
        }
    }
}
