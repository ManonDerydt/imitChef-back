const express = require('express');
const cors = require('cors')
const models = require("./models");
const userRoutes = require("./modules/auth/users/users.routes");

const app = express();

app.use(cors())
app.get("/", (req, res, next) => res.send("OK"));

app.use(userRoutes);

(async() => {
    try {
        await models.sequelize.authenticate();

        const users = await models.User.findAll()
        console.log(users)
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = app;
