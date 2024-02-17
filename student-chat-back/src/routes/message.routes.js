const express = require('express')
const router = express.Router()
const controller = require('../controller/message.controller')

router.post('/add',controller.addMessage)

module.exports = router