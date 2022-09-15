const {Sequelize} = require("sequelize");

class Deals_has_Orders extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          DealId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Deal",
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

          tableName: "Deals_has_Orders",
          modelName: "Deals_has_Orders",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
}

module.exports = Deals_has_Orders;