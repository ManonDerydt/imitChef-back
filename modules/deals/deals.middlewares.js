const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:deals");

exports.getAllDeals = (req, res, next) => {
    debug("getAllDeals");

    return execute()
        .then(deals => res.json(deals))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Deal.findAll({
                attributes: ['price','max_people','deadline',"image","adress","chef","menu","number","restaurant","email","city"]
            });
        }catch (error){
            throw error;
        }
    }
};
