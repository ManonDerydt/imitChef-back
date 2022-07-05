const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require("./models");
const userRoutes = require("./modules/users/users.routes");
const tvShowRoutes = require("./modules/tv_shows/tv_shows.routes");
const candidateRoutes = require("./modules/candidates/candidates.routes");
const reciepeRoutes = require("./modules/reciepes/reciepes.routes");
const restaurantRoutes = require("./modules/restaurants/restaurants.routes");
const orderRoutes = require("./modules/orders/order.routes");
require("./passport/local");
require("./passport/jwt");


const app = express();

app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res, next) => res.send("OK"));

app.use(userRoutes);
app.use(tvShowRoutes);
app.use(candidateRoutes);
app.use(reciepeRoutes);
app.use(restaurantRoutes);
app.use(orderRoutes);

(async() => {
    try {
        await models.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = app;
