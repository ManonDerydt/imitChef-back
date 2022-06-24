const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:restaurants");

exports.getRestaurant = (req, res, next) => {
    debug("getRestaurant");

    const {id} = req.params;

    return execute()
        .then(restaurant => res.json(restaurant))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Restaurant.findByPk(id, {
                attributes : ["id", "chef", "country", "name", "city", "category"],
                include : [
                    {
                        model : models.Reciepe,
                        attributes: ["id", "image", "title", "description","time_cooking","difficulty"]
                    }
                ]
            });
        }catch (error){
            console.log(error)
            throw error;
        }
    }
};