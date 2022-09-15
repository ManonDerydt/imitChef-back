const {Sequelize} = require("sequelize");

class Deal extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          deadline: {type: Sequelize.STRING,  allowNull: true},
          max_people: {type: Sequelize.STRING, allowNull: true},
          price: {type: Sequelize.STRING, allowNull: true},
          image: {type: Sequelize.STRING, allowNull: true},
          Chef: {type: Sequelize.STRING, allowNull: true},
          menu: {type: Sequelize.STRING, allowNull: true},
          restaurant: {type: Sequelize.STRING, allowNull: true},
          adress: {type: Sequelize.STRING, allowNull: true},
          number: {type: Sequelize.STRING, allowNull: true},
          email: {type: Sequelize.STRING, allowNull: true},

        }, {
          tableName: "Deals",
          modelName: "Deals",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {
      Deal.belongsToMany(models.Restaurant, {through : models.Restaurants_has_Deals})
      Deal.belongsToMany(models.Order, {through : models.Deals_has_Orders})
  }
}

module.exports = Deal;