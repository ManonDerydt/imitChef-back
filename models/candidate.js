const {Sequelize} = require("sequelize");

class Candidate extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                lastname: {type: Sequelize.STRING,  allowNull: false},
                firstname: {type: Sequelize.STRING,  allowNull: false},
                reciepes: {type: Sequelize.STRING, allowNull: false},
                tv_show: {type: Sequelize.STRING, allowNull: false},
                image: {type: Sequelize.STRING, allowNull: false}
            }, {

                tableName: "Candidates",
                modelName: "Candidates",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
    // Etape 9 : Associé les tables de jointure

    static associate(models) {
        Candidate.belongsToMany(models.Tv_Show, {through : models.Candidates_has_Tv_show})
        Candidate.belongsToMany(models.Reciepe, {through : models.Candidates_has_Reciepes})
    }
}

module.exports = Candidate;
