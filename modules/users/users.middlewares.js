const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:admin:users");

exports.createUsers = (req, res, next) => {
    debug("createUser");

    console.log(req.body)
    const {password, email, lastname, firstname} = req.body;

    const user = {
        password : password,
        email : email,
        lastname : lastname,
        firstname : firstname
    }

    return execute()
        .then(() => {
            res.json({"Ok": true});
        })
        .catch((err) => next(err));

    async function execute() {
        try {
            return await models.User.create(user);
        }
        catch(err) {
            throw (err);
        }
    }
}
