const path = require("path");
const models = require(path.resolve("./models"));
const debug = require("debug")("app:candidates");

exports.getCandidates = (req, res, next) => {
    debug("getCandidates");

    return execute()
        .then(show => res.json(show))
        .catch(err => next(err));

    async function execute() {
        try {
            return await models.Candidate.findAll();
        } catch (error) {
            throw error;
        }
    }
};

exports.getCandidateById = (req, res, next) => {
    debug("getCandidateById");

    const { id } = req.params;

    return execute()
        .then(candidate => res.json(candidate))
        .catch(err => next(err));

    async function execute() {
        try {
            return await models.Candidate.findByPk(id, {
                attribute: ["id", "lastname", "firstname", "image"],
                include: [
                    {
                        model: models.Reciepe,
                        attributes: ["id", "image", "title", "description"],
                        include : [
                            {
                                model: models.Ingredient,
                                attributes: ["salt", "peper"]
                            },
                            {
                                model: models.Material,
                                attributes: ["Grill", "Four"]
                            },
                            {
                                model: models.Step,
                                attributes: ["first_step", "second_step", "third_step", "fourth_step", "fifth_step"]
                            }
                        ]
                    }
                ]
            });
        } catch (error) {
            throw error;
        }
    }

}

//Etape 6 : On récupère l'id du show
exports.getCandidatesByShow = (req, res, next) => {
    debug("getCandidatesByShow");

    const { showId } = req.params;

    return execute()
        .then(show => res.json(show))
        .catch(err => next(err));

    async function execute() {
        try {
            return await models.Candidate.findAll(showId)
        } catch (error) {
            throw error;
        }
    }
};

exports.getReciepeByCandidateOnClick = (req, res, next) => {
    debug("getReciepeByCandidateOnClick");

    return execute()
        .then(candidate => res.json(candidate))
        .catch(err => next(err));

    async function execute() {
        try {
            return await models.Candidate.findAll();
        } catch (error) {
            throw error;
        }
    }
};
