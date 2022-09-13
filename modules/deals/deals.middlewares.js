const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:deals");

exports.getAllDeals = (req, res, next) => {
    debug("getAllDeals");

    const {id} = req.params;

    return execute()
        .then(deals => res.json(deals))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Deal.findAll({
                attributes: ['price','max_people','image']
            });
        }catch (error){
            throw error;
        }
    }
};
