const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:reciepes+*");

// exports.getReciepe= (req, res, next) => {
//     debug("getReciepe");
//
//     return execute()
//         .then(show => res.json(show))
//         .catch(err => next(err));
//
//     async function execute(){
//         try{
//             return await models.Reciepe.findAll();
//         }catch (error){
//             throw error;
//         }
//     }
// };

exports.getReciepe = (req, res, next) => {
    debug("getReciepe");

    const { id } = req.params;

    return execute()
        .then(reciepe => res.json(reciepe))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Reciepe.findByPk(id, {
                attributes: ["description", "image", "titre", "time_cooking", "difficulty"],
                include: [
                    {
                        model: models.Ingredient,
                        attributes: ["salt", "peper","poultry"]
                    },
                    {
                        model: models.Material,
                        attributes: ["Grill", "Four"]
                    },
                    {
                        model: models.Step,
                        attributes: ["first_step", "second_step", "third_step", "fourth_step", "fifth_step"]
                    },
                ]});
        }catch (error){
            throw error;
        }
    }
};