const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:./reciepeFromCandidates");


exports.getRecipeFromCandidates = (req, res, next) => {
    debug("getRecipeFromCandidates");

    return execute()
        .then(show => res.json(show))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.ReciepefromCandidates.findAll();
        }catch (error){
            throw error;
        }
    }
};