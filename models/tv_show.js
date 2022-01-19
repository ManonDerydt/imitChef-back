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
}

module.exports = TvShow;
