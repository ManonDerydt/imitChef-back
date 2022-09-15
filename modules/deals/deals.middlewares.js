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
                attributes: ['id','price','max_people','deadline',"image","adress","chef","menu","number","restaurant","email","city"],
                include: [
                    {
                        model: models.Order,
                        attributes: ["id", "time", "price", "discount"]
                    }
                ]
            });
        }catch (error){
            throw error;
        }
    }
};

exports.getDealById = (req, res, next) => {
    debug("getDealById");

    const {id} = req.params;

    return execute()
        .then(deal => res.json(deal))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Deal.findByPk(id, {
                attributes:['id','price','max_people','deadline',"image","adress","chef","menu","number","restaurant","email","city"],
                include: [
                    {
                        model: models.Order,
                        attributes: ["id", "time", "price", "discount"]
                    }
                ]
            });
        }catch (error){
            console.log(error)
            throw error;
        }
    }
};
