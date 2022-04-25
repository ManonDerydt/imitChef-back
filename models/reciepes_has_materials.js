const {Sequelize} = require("sequelize");

class Reciepes_has_Materials extends Sequelize.Model {

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
          MaterialId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Material",
              key: "id"
            }
          }
        }, {

          tableName: "Reciepes_has_Materials",
          modelName: "Reciepes_has_Materials",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
}

module.exports = Reciepes_has_Materials;