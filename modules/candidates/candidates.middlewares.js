const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:candidates");

exports.getCandidates = (req, res, next) => {
    debug("getCandidates");

    return execute()
        .then(show => res.json(show))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Candidate.findAll();
        }catch (error){
            throw error;
        }
    }
};