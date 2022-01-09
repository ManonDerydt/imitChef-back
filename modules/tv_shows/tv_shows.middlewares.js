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

    function getShow(){
        return req.Tv_Show;
    }
};
