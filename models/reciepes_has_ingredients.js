const {Sequelize} = require("sequelize");

class Reciepes_has_Ingredients extends Sequelize.Model {

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
          IngredientId: {
            type:DataTypes.INTEGER,
            references: {
              model: "Ingredient",
              key: "id"
            }
          }
        }, {

          tableName: "Reciepes_has_Ingredients",
          modelName: "Reciepes_has_Ingredients",
          underscored: true,
          sequelize: sequelize
        }
    );
  }
}

module.exports = Reciepes_has_Ingredients;