const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:show");

exports.getAllShow = (req, res, next) => {
    debug("getAllShow");

    return execute()
        .then(show => res.json(show))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Tv_Show.findAll();
        }catch (error){
            throw error;
        }
    }
};

exports.getShow = (req, res, next) => {
    debug("getShow");

    const {id} = req.params;

    return execute()
        .then(show => res.json(show))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Tv_Show.findByPk(id);
        }catch (error){
            throw error;
        }
    }
};
