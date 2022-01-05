const {Sequelize} = require("sequelize");

class Reciepe extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {

            }, {
                tableName: "Reciepes",
                modelName: "Reciepes",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
}

module.exports = Reciepe;
