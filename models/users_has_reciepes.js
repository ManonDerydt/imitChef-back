const {Sequelize} = require("sequelize");

class Users_has_reciepes extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                UserId: {
                    type:DataTypes.INTEGER,
                    references: {
                        model: "Users",
                        key: "id"
                    }
                },
                ReciepeId: {
                    type:DataTypes.INTEGER,
                    references: {
                        model: "Reciepes",
                        key: "id"
                    }
                }
            }, {

                tableName: "Users_has_Reciepes",
                modelName: "Users_has_reciepes",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
}

module.exports = Users_has_reciepes;