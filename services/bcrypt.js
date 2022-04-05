const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
}