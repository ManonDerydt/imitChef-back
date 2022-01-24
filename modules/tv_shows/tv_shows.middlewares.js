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
            let shows;
            shows = await models.Tv_Show.findAll();
            return shows;
        }catch (error){
            throw error;
        }
    }
};

exports.getAllShowById = (req, res, next) => {
    debug("getAllShowById");

    console.log("hello world");

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
