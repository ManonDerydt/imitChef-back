const {Sequelize} = require("sequelize");

class Ingredients extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                description: {type: Sequelize.STRING,  allowNull: false},
                image: {type: Sequelize.STRING, allowNull: false},
                titre: {type: Sequelize.STRING, allowNull: false},
                time_cooking: {type: Sequelize.STRING, allowNull: true},
                difficulty: {type: Sequelize.STRING, allowNull: true},

            }, {
                tableName: "Reciepes",
                modelName: "Reciepes",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
    static associate(models) {
        Ingredients.belongsToMany(models.Reciepe, {through : models.Reciepe_has_ingredients})
    }
}

module.exports = Ingredients;
