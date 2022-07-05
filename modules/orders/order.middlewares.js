const path = require("path");
const models = require(path.resolve("./models"));
const localforage = require("localforage");
const debug = require("debug")("app:orders");

exports.getOrder = (req, res, next) => {
    debug("getOrder");

    const {id} = req.params;

    return execute()
        .then(order => res.json(order))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Order.findByPk(id, {
                attributes : ["id", "time", "price", "cutlery", "discount", "tip"],
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