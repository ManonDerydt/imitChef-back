const {Sequelize} = require("sequelize");

class Candidates_has_Tv_show extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                CandidateId: {
                    type:DataTypes.INTEGER,
                    references: {
                        model: "Candidate",
                        key: "id"
                    }
                },
                TvShowId: {
                    type:DataTypes.INTEGER,
                    references: {
                        model: "Tv_Show",
                        key: "id"
                    }
                }
            }, {

                tableName: "Candidates_has_Tv_show",
                modelName: "Candidates_has_Tv_show",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
}

module.exports = Candidates_has_Tv_show;