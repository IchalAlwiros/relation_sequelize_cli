const express = require('express')
const UserController = require("../controllers/user.controllers");
const { readUser } = UserController

const router = express.Router()

router.get('/', readUser)

module.exports = router