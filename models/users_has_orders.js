const {Sequelize} = require("sequelize");

class Users_has_Orders extends Sequelize.Model {

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
          OrderId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Order",
              key: "id"
            }
          }
        }, {

          tableName: "Users_has_Orders",
          modelName: "Users_has_Orders",
          underscored: true,
          sequelize: sequelize
        }
    );

  }

}

module.exports = Users_has_Orders;