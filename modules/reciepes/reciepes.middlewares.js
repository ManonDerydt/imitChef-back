const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:reciepes+*");

exports.getReciepe= (req, res, next) => {
    debug("getReciepe");

    return execute()
        .then(show => res.json(show))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Reciepe.findAll();
        }catch (error){
            throw error;
        }
    }
};

// Etape 6 : Réception de l'id des reciepes dans la route
exports.getReciepeById = (req, res, next) => {
    debug("getReciepeById");

    const {id} = req.params;

    return execute()
        .then(reciepe => res.json(reciepe))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Reciepe.findByPk(id);
        }catch (error){
            throw error;
        }
    }
};