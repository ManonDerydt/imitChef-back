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

exports.getReciepeById = (req, res, next) => {
    debug("getReciepeById");

    return execute()
        .then(reciepe => res.json(reciepe))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Reciepe.findAll();
        }catch (error){
            throw error;
        }
    }
};