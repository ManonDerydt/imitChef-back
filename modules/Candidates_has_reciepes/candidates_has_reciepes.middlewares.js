const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:candidates_has_reciepes");

exports.getReciepesByCandidate= (req, res, next) => {
    debug("getAllCandidatesByShow");

    return execute()
        .then(candidateHasTvShow => res.json(candidateHasTvShow))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Candidates_has_Reciepes.findAll();
        }catch (error){
            throw error;
        }
    }
};