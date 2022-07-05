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

    console.log("je suis dans la fonction getReciepe")

    const { id } = req.params;

    return execute()
        .then(reciepe => res.json(reciepe))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Reciepe.findByPk(id, {
                attributes: ["description", "image", "title", "time_cooking", "difficulty"],
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
                    {
                        model: models.Restaurant,
                        attributes: ["id","country", "name", "city", "chef", "category"]
                    },
                    {
                        model: models.User,
                        attributes: ["lastname","firstname", "email"]
                    },
                    {
                        model: models.Order,
                        attributes: ["id", "time", "price", "cutlery", "discount", "tip"]
                    },
                ]});
        }catch (error){
            throw error;
        }
    }
};