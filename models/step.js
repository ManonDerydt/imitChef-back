const {Sequelize} = require("sequelize");

class Step extends Sequelize.Model {

  static init(sequelize, DataTypes) {
    return super.init(
        {
          first_step: {type: Sequelize.STRING, allowNull: true},
          second_step: {type: Sequelize.STRING, allowNull: true},
          third_step: {type: Sequelize.STRING, allowNull: true},
          fourth_step: {type: Sequelize.STRING, allowNull: true},
          fifth_step: {type: Sequelize.STRING, allowNull: true},

        }, {
          tableName: "Steps",
          modelName: "Steps",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
  static associate(models) {
    Step.belongsToMany(models.Reciepe, {through : models.Reciepes_has_Steps})
  }
}

module.exports = Step;
