'use strict';

const {Sequelize} = require("sequelize");

class Materials extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          Deep_fryer: {type: Sequelize.STRING, allowNull: true},
          Blender: {type: Sequelize.STRING, allowNull: true},
          Grill: {type: Sequelize.STRING, allowNull: true},
          Waffle_iron: {type: Sequelize.STRING, allowNull: true},
          Four: {type: Sequelize.STRING, allowNull: true},
          Microwave: {type: Sequelize.STRING, allowNull: true},

        }, {
          tableName: "Materials",
          modelName: "Materials",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {
    Materials.belongsToMany(models.Reciepe, {through : models.Reciepes_has_Materials})
  }
}

module.exports = Materials;