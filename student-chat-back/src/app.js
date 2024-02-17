const express = require('express')
const config = require('./config')

const app = express()

app.set('port', config.app.port)

app.use(express.json())

//rutas
app.use('/api/auth',require('./routes/auth.routes'))
app.use('/api/users',require('./routes/user.routes'))

module.exports = app