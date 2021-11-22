const express = require('express');
const bodyparser = require('body-parser');
const models = require("./models");

const app = express();
app.get("/", (req, res, next) => res.send("OK"));


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
