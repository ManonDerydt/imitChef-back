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
                        include: [
                            {
                                model : models.Reciepe
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

// exports.getCandidatesByShow = (req, res, next) => {
//     debug("getCandidatesByShow");
//
//     const {tv_show} = req.params;
//
//     return execute()
//         .then(show => res.json(show))
//         .catch(err => next(err));
//
//     async function execute(){
//         try{
//             return await models.Tv_Show.findAll({
//                 include: [{
//                     model: models.Reciepe
//                 }],
//             })
//             console.log(models.Candidate)
//             console.log("test")
//         }catch (error){
//             throw error;
//         }
//     }
// };
