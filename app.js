const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require("./models");
const userRoutes = require("./modules/users/users.routes");
const tvShowRoutes = require("./modules/tv_shows/tv_shows.routes");
const candidateRoutes = require("./modules/candidates/candidates.routes");
const reciepeRoutes = require("./modules/reciepes/reciepes.routes");


const app = express();

app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res, next) => res.send("OK"));

app.use(userRoutes);
// app.use(tvShowRoutes);
// app.use(candidateRoutes);
// app.use(reciepeRoutes);

(async() => {
    try {
        await models.sequelize.authenticate();

        const users = await models.User.findAll();
        // const tvShows = await models.Tv_Show.findAll();
        // const candidates = await models.Candidate.findAll();
        // const reciepes = await models.Reciepe.findAll();
        //
        // console.log(tvShows)
        // console.log(users)
        // console.log(candidates)
        // console.log(reciepes)

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = app;
