const config = require('../config')
const  jwt = require('jsonwebtoken')
import pool from '../dataBase/mysql'

const  login = async (req,res )=>{
    const data = req.body
    try {
        const result = (await pool).query('SELECT * FROM USERS WHERE userName = ?', data.userName)
        result.then((result)=>[
            valideResult(result[0], res, data)
        ]).catch((err)=>{
            console.log(err)
        })
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const valideResult = (result, res , data) =>{
    if(result.length > 0){
        if(result[0].password == data.password){
            const token = jwt.sign(
                {id: result[0].id},
                config.app.secret
                ,{expiresIn : config.app.expired})
            res.status(200).json({
                token: token,
                userName: result[0].userName,
                name: result[0].name,
                rol: result[0].rol
            })
        }else{
            res.status(402).json({error:"Contraseña incorrecta"})
        }
    }else{
        res.status(400).json({error:"Usuario no encontrado"})
    }
}
module.exports = {
    login
}