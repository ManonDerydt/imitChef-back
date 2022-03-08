const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:Candidates_has_tvShow");

exports.getAllCandidatesByShow= (req, res, next) => {
    debug("getAllCandidatesByShow");

    return execute()
        .then(candidateHasTvShow => res.json(candidateHasTvShow))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Candidates_has_Tv_show.findAll();
        }catch (error){
            throw error;
        }
    }
};