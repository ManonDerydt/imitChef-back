const {Sequelize} = require("sequelize");

class Gallery extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          image: {type: Sequelize.STRING,  allowNull: true},
          name: {type: Sequelize.STRING,  allowNull: true},
          date: {type: Sequelize.STRING,  allowNull: true},

        }, {
          tableName: "Gallery",
          modelName: "Gallery",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {

  }
}

module.exports = Gallery;