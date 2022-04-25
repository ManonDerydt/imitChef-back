const {Sequelize} = require("sequelize");

class Reciepes_has_Steps extends Sequelize.Model {

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
          StepId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Step",
              key: "id"
            }
          }
        }, {

          tableName: "Reciepes_has_Steps",
          modelName: "Reciepes_has_Steps",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
}

module.exports = Reciepes_has_Steps;