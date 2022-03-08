const {Sequelize} = require("sequelize");

class TvShow extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: {type: Sequelize.STRING,  allowNull: false},
                category: {type: Sequelize.STRING,  allowNull: false},
                image: {type: Sequelize.STRING,  allowNull: false}
            }, {
                tableName: "Tv_show",
                modelName: "Tv_show",
                underscored: true,
                sequelize: sequelize
            }
        );
    }

    static associate(models) {
        console.log(models)
        TvShow.belongsToMany(models.Candidate, {through : models.Candidates_has_Tv_show})
    }
}

module.exports = TvShow;
