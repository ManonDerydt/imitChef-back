const path = require("path");
const models = require(path.resolve("./models"));
const Candidate = require("../../models/candidate");
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
            return await models.Tv_Show.findByPk(id, {
                attributes : ["id", "name", "category", "image"],
                include : [
                    {
                        model : models.Candidate,
                        attributes: ["id", "lastname", "firstname", "image"],
                        include: [
                            {
                                model : models.Reciepe,
                                attributes: ["id", "image", "titre", "description"]
                            }
                        ]
                    }
                ]
            });
        }catch (error){
            console.log(error)
            throw error;
        }
    }
};
