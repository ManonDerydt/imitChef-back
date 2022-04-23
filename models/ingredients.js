const {Sequelize} = require("sequelize");

class Ingredient extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                poultry: {type: Sequelize.STRING, allowNull: true},
                carrot: {type: Sequelize.STRING, allowNull: true},
                ognions: {type: Sequelize.STRING, allowNull: true},
                mushrooms: {type: Sequelize.STRING, allowNull: true},
                peper: {type: Sequelize.STRING, allowNull: true},
                salt: {type: Sequelize.STRING, allowNull: true},

            }, {
                tableName: "Ingredients",
                modelName: "Ingredients",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
    static associate(models) {
        Ingredient.belongsToMany(models.Reciepe, {through : models.Reciepes_has_Ingredients})
    }
}

module.exports = Ingredient;
