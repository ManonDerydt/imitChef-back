const dotenv = require("dotenv");
const UserModel = require("./user");
const TvShowModel = require("./tv_show");
const CandidateModel = require("./candidate");
const ReciepesModel = require("./reciepe");
const RestaurantModel = require("./restaurant");
const Candidates_has_Tv_showModel = require("./candidates_has_tv-show");
const Candidates_has_ReciepesModel = require("./candidates_has_Reciepes");
const Reciepes_has_RestaurantsModel = require("./reciepes_has_restaurants");
const IngredientsModel = require("./ingredients");
const StepModel = require("./step");
const OrderModel = require("./order");
const DealModel = require("./deal");
const GalleryModel = require("./gallery");
const MaterialModel = require("./materials");
const Reciepes_has_IngredientsModel = require("./reciepes_has_ingredients");
const Deals_has_OrdersModel = require("./deals_has_orders");
const Reciepes_has_MaterialsModel = require("./reciepes_has_materials");
const Reciepes_has_StepsModel = require("./reciepes_has_steps");
const Reciepes_has_OrdersModel = require("./reciepes_has_orders");
const Users_has_ReciepesModel = require("./users_has_reciepes");
const Restaurants_has_DealsModel = require("./restaurants_has_deals");

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
    Restaurant: RestaurantModel.init(sequelize, Sequelize),
    Ingredient: IngredientsModel.init(sequelize, Sequelize),
    Step: StepModel.init(sequelize, Sequelize),
    Order: OrderModel.init(sequelize, Sequelize),
    Deal: DealModel.init(sequelize, Sequelize),
    Gallery: GalleryModel.init(sequelize, Sequelize),
    Material: MaterialModel.init(sequelize, Sequelize),
    Candidates_has_Tv_show: Candidates_has_Tv_showModel.init(sequelize, Sequelize),
    Reciepes_has_Orders: Reciepes_has_OrdersModel.init(sequelize, Sequelize),
    Deals_has_Orders: Deals_has_OrdersModel.init(sequelize, Sequelize),
    Candidates_has_Reciepes: Candidates_has_ReciepesModel.init(sequelize, Sequelize),
    Reciepes_has_Restaurants: Reciepes_has_RestaurantsModel.init(sequelize, Sequelize),
    Reciepes_has_Ingredients: Reciepes_has_IngredientsModel.init(sequelize, Sequelize),
    Reciepes_has_Materials: Reciepes_has_MaterialsModel.init(sequelize, Sequelize),
    Reciepes_has_Steps: Reciepes_has_StepsModel.init(sequelize, Sequelize),
    Users_has_Reciepes: Users_has_ReciepesModel.init(sequelize, Sequelize),
    Restaurants_has_Deals: Restaurants_has_DealsModel.init(sequelize, Sequelize),
}

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));


models.sequelize = sequelize;
models.Sequelize = Sequelize;
models.Op = Op;
module.exports = models;
