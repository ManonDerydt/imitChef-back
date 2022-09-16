const {Sequelize} = require("sequelize");

class Order extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          time: {type: Sequelize.STRING,  allowNull: true},
          price: {type: Sequelize.STRING, allowNull: true},
          cutlery: {type: Sequelize.STRING, allowNull: true},
          discount: {type: Sequelize.STRING, allowNull: true},
          tip: {type: Sequelize.STRING, allowNull: true},
        }, {
          tableName: "Orders",
          modelName: "Orders",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {
      Order.belongsToMany(models.Reciepe, {through : models.Reciepes_has_Orders})
      Order.belongsToMany(models.Deal, {through : models.Deals_has_Orders})
      Order.belongsToMany(models.User, {through : models.Users_has_Orders})
  }
}

module.exports = Order;