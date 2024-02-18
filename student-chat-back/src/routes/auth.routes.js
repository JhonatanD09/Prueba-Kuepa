const express = require('express')
const controller = require('../controller/auth.controller')

const router = express.Router()

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      sumary : Login app
 *      tags : [Auth]   
 *      responses:
 *          200:
 *              description: success login!
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
 *                      $ref: '#/components/schemas/Login'
 */
router
router.post('/login',controller.login)

module.exports = router