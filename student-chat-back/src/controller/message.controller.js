import pool from "../dataBase/mysql"

const addMessage = async (req, res) =>{
    const {message,userName} = req.body
    const user = (await pool).query('SELECT iduser FROM users where username = ?', userName);
    if(user[0]==0){
        res.status(400).json({message:'Usuario no encontrado'})
    }else{
        const objSend = {message: message, idUser:user[0].idUser}
        let query =(await pool).query('INSERT INTO MESSAGES SET ?',objSend)
        query.then((result)=>{
            console.log(result)
            res.status(200).json({ok:"mensaje guardado"})
        }).catch((err)=>{
            console.log(err)
            res.status(400).json({error: "Mensaje no guardado"})
        })
    }
}

module.exports = {
    addMessage
}