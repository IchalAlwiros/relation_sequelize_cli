const express = require('express')
const { readArticle } = require("../controllers/article.controllers")

const router = express.Router()

router.get('/', readArticle)

module.exports = router