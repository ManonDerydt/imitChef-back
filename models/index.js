const dotenv = require("dotenv");
const UserModel = require("./user");
const TvShowModel = require("./tv_show");
const CandidateModel = require("./candidate");
const ReciepesModel = require("./reciepe");
const Candidates_has_Tv_showModel = require("./candidates_has_tv-show");
const Candidates_has_ReciepesModel = require("./candidates_has_Reciepes");
const IngredientsModel = require("./ingredients");
const Reciepes_has_IngredientsModel = require("./reciepes_has_ingredients");

dotenv.config();

const {Sequelize, Op} = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_ROOT,
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        define: {underscored: true, timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at'},
        logging: false,
        host: process.env.MYSQL_HOST,
        maxConcurrentQueries: 350,
        sync: {force: false},
        pool: {
            max: 36,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

const models = {
    User: UserModel.init(sequelize, Sequelize),
    Tv_Show: TvShowModel.init(sequelize, Sequelize),
    Candidate: CandidateModel.init(sequelize, Sequelize),
    Reciepe: ReciepesModel.init(sequelize, Sequelize),
    Ingredient: IngredientsModel.init(sequelize, Sequelize),
    Candidates_has_Tv_show: Candidates_has_Tv_showModel.init(sequelize, Sequelize),
    Candidates_has_Reciepes: Candidates_has_ReciepesModel.init(sequelize, Sequelize),
    Reciepes_has_Ingredients: Reciepes_has_IngredientsModel.init(sequelize, Sequelize),
}

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));


models.sequelize = sequelize;
models.Sequelize = Sequelize;
models.Op = Op;
module.exports = models;
