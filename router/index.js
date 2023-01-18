module.exports = app => {
    const User = require('./user.router')
    app.use("/user", User)
    
    const Article = require('./article.router')
    app.use("/article", Article)
}