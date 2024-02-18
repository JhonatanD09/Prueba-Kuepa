const express = require('express')
const router = express.Router()
const controller = require('../controller/message.controller')


/**
 * @swagger
 * /api/messages/add:
 *  post:
 *      sumary : Login app
 *      tags : [Message]   
 *      responses:
 *          200:
 *              description: Mensaje guardado
 *          404:
 *              description: Usuario no encontrado
 *          402:
 *              description: Contraseña incorrecta
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/Message'
 */
router.post('/add',controller.addMessage)

module.exports = router