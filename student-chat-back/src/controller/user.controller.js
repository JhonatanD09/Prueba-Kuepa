import pool from '../dataBase/mysql'

const createUser = async (req,res ) =>{
    let  data = req.body
    try {
        const result = (await pool).query('SELECT * FROM USERS WHERE userName = ?', data.userName)
        result.then(async (users)=>{
        if(users[0] == 0 ){
            let query =(await pool).query('INSERT INTO USERS SET ?',data)
            query.then((result)=>{
                console.log(result)
                res.status(200).json({ok:"usuario agregado"})
            }).catch((err)=>{
                console.log(err)
                res.status(400).json({error: "Usuario no agregado"})
            })
        }else{
            res.status(400).json({error:"Nombre de usuario no disponible"})
        }
    })
       
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    createUser
}