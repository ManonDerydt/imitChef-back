const {Sequelize} = require("sequelize");

class Reciepe extends Sequelize.Model {

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
        Reciepe.belongsToMany(models.Candidate, {through : models.Candidates_has_Reciepes})
        Reciepe.belongsToMany(models.Ingredient, {through : models.Reciepes_has_Ingredients})
        Reciepe.belongsToMany(models.Material, {through : models.Reciepes_has_Materials})
        Reciepe.belongsToMany(models.Step, {through : models.Reciepes_has_Steps})
    }
}

module.exports = Reciepe;
