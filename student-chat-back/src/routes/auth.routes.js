const express = require('express')
const controller = require('../controller/auth.controller')

const router = express.Router()

router.post('/login',controller.login)

module.exports = router