const {Sequelize} = require("sequelize");

class Restaurant extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: {type: Sequelize.STRING,  allowNull: true},
                city: {type: Sequelize.STRING, allowNull: true},
                country: {type: Sequelize.STRING, allowNull: true},
                category: {type: Sequelize.STRING, allowNull: true},
                chef: {type: Sequelize.STRING, allowNull: true},
                image: {type: Sequelize.STRING, allowNull: true},
                description: {type: Sequelize.STRING, allowNull: true},
                discount: {type: Sequelize.STRING, allowNull: true},
                adress: {type: Sequelize.STRING, allowNull: true},
                number: {type: Sequelize.STRING, allowNull: true},
                email: {type: Sequelize.STRING, allowNull: true},
            }, {
                tableName: "Restaurants",
                modelName: "Restaurants",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
    static associate(models) {
        Restaurant.belongsToMany(models.Reciepe, {through : models.Reciepes_has_Restaurants})
    }
}

module.exports = Restaurant;