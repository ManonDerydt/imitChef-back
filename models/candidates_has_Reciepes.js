// Etape 8 : mise en forme du model de la table de jointure
const {Sequelize} = require("sequelize");

class Candidates_has_Reciepes extends Sequelize.Model {

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
                ReciepeId: {
                    type:DataTypes.INTEGER,
                    references: {
                        model: "Reciepe",
                        key: "id"
                    }
                }
            },{
                tableName: "Candidates_has_Reciepes",
                modelName: "Candidates_has_Reciepes",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
}

module.exports = Candidates_has_Reciepes;
