const { Article } = require('../sequelize/models')

const readArticle = async (req, res, next) => {
    try {
        const userData = await Article.findAll()
        return res.status(200).json(userData)
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}



module.exports = {
    readArticle
}