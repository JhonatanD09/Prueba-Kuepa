const express = require('express')
const config = require('./config')
import { Console } from "console";
import { createServer } from "http";
import { Server } from "socket.io";
import { SWAGGER_SERVE, SWAGGER_SETUP } from './configs/swagger.config';

const app = express()
const http = createServer(app);
const io = new Server(http, { cors: { origin: true , credentials: true, methods :["GET", "POST"] }});

//socket
io.on('connection',(socket)=>{
    console.log('conected')

    // socket.emit('server','conectado')

    socket.on('recept',(data)=>{
        console.log(data)
        socket._cleanup
        socket.broadcast.emit('send', data)
    })

})
app.use(express.json())

// //rutas
app.use('/api/auth',require('./routes/auth.routes'))
app.use('/api/users',require('./routes/user.routes'))
app.use('/api/messages',require('./routes/message.routes'))
app.use('/api-doc', SWAGGER_SERVE, SWAGGER_SETUP);

module.exports = http