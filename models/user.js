const {Sequelize} = require("sequelize");

class User extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init(
            {
                lastname: {type: Sequelize.STRING,  allowNull: false},
                firstname: {type: Sequelize.STRING,  allowNull: false},
                email: {type: Sequelize.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
                password: {type: Sequelize.STRING, allowNull: false},
            }, {
                indexes: [{
                    unique: true,
                    fields: ["email"]
                }],
                tableName: "Users",
                modelName: "User",
                underscored: true,
                sequelize: sequelize
            }
        );
    }
    static associate(models) {
        User.belongsToMany(models.Reciepe, {through : models.Users_has_Reciepes})
    }
}

module.exports = User;
