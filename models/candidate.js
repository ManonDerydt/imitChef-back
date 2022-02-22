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
}

module.exports = Candidate;
