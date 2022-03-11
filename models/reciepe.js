const {Sequelize} = require("sequelize");

class Reciepe extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                description: {type: Sequelize.STRING,  allowNull: false},
                image: {type: Sequelize.STRING, allowNull: false},
                titre: {type: Sequelize.STRING, allowNull: false}

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
    }
}

module.exports = Reciepe;
