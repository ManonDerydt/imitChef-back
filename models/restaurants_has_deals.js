const {Sequelize} = require("sequelize");

class Restaurants_has_Deals extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          RestaurantId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Restaurant",
              key: "id"
            }
          },
          DealId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Deal",
              key: "id"
            }
          }
        }, {

          tableName: "Restaurants_has_Deals",
          modelName: "Restaurants_has_Deals",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
}

module.exports = Restaurants_has_Deals;