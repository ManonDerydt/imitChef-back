const http = require("http");
const dotenv = require("dotenv").config();
const app = require("./app");

const server = http.createServer(app);

server.listen(process.env.PORT || 1995, () => console.log("API is running on " + process.env.PORT));

module.exports = server;
