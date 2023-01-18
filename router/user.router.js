const express = require('express')
const { readUser } = require("../controllers/user.controllers")

const router = express.Router()

router.get('/', readUser)

module.exports = router