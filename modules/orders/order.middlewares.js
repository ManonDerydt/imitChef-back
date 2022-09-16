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
                        model : models.Deal,
                        attributes: ['id','price','max_people','deadline',"image","adress","chef","menu","number","restaurant","email","city"]
                    },
                    {
                        model : models.User,
                        attributes: ['lastname','firstname','email']
                    }
                ]
            });
        }catch (error){
            console.log(error)
            throw error;
        }
    }
};