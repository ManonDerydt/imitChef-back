const {Sequelize} = require("sequelize");

class Reciepes_has_Restaurants extends Sequelize.Model {

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
          RestaurantId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Restaurant",
              key: "id"
            }
          }
        }, {

          tableName: "Reciepes_has_Restaurants",
          modelName: "Reciepes_has_Restaurants",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
}

module.exports = Reciepes_has_Restaurants;