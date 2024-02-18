const config = require('../config')
const  jwt = require('jsonwebtoken')
import pool from '../dataBase/mysql'

const  login = async (req,res )=>{
    const data = req.body
    console.log(data)
    try {
        const result = (await pool).query('SELECT * FROM USERS WHERE userName = ?', data.userName)
        result.then((result)=>[
            valideResult(result[0], res)
        ]).catch((err)=>{
            console.log(err)
        })
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const valideResult = (result, res) =>{
    if(result.length > 0){
        console.log(result)
        const token = jwt.sign(
            {id: result.id},
            config.app.secret
            ,{expiresIn : config.app.expired})
        res.status(200).json({
            token: token,
            userName: result[0].userName,
            name: result[0].name,
            rol: result[0].rol
        })
    }else{
        res.status(400).json({error:"User no found"})
    }
}
module.exports = {
    login
}