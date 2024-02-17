const express = require('express')
const controller = require('../controller/user.controller')

const router = express.Router()


router.post('/create',controller.createUser)

module.exports = router