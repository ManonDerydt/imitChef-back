const {Sequelize} = require("sequelize");

class Reciepes_has_orders extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          ReciepeId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Reciepe",
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

          tableName: "Reciepes_has_Orders",
          modelName: "Reciepes_has_orders",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
}

module.exports = Reciepes_has_orders;