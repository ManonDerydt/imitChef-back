const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:gallery");

exports.getGallery = (req, res, next) => {
    debug("getGallery");

    console.log("Hello world")

    return execute()
        .then(gallery => res.json(gallery))
        .catch(err => next(err));

    async function execute(){
        try{
            return await models.Gallery.findAll({
                attributes: ['id','image','date','name'],
            });
        }catch (error){
            throw error;
        }
    }
};