const express = require('express')
const controller = require('../controller/user.controller')

const router = express.Router()

/**
 * @swagger
 * /api/users/create:
 *  post:
 *      sumary : Message Service
 *      tags : [User]   
 *      responses:
 *          200:
 *              description: Usuario agregado
 *          400:
 *              description: Usuario no agregado
 *          402:
 *              description: Nombre de usuario no disponible
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type : object
 *                      $ref: '#/components/schemas/User'
 */
router.post('/create',controller.createUser)

module.exports = router