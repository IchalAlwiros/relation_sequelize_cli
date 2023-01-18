const { user } = require('../sequelize/models')

const readUser = async (req, res, next) => {
    try {
        const userData = await user.findAll()
        return res.status(200).json(userData)
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}



module.exports = {
    readUser
}