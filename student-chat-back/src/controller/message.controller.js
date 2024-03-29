import pool from "../dataBase/mysql"

const addMessage = async (req, res) =>{
    const {message,userName} = req.body
    const queryUser = (await pool).query('SELECT iduser FROM users where username = ?', userName)
    queryUser.then(async (result)=>{
        let user = result
            if(user[0]==0){
                res.status(404).json({message:'Usuario no encontrado'})
            }else{
            const objSend = {text: message, idUser:user[0][0].iduser}
            let query =(await pool).query('INSERT INTO MESSAGES SET ?',objSend)
            query.then(()=>{
                res.status(200).json({ok:"Mensaje guardado"})
            }).catch((err)=>{
                console.log(err)
                res.status(400).json({error: "Mensaje no guardado"})
            })
        }
    })
    .catch( (err) =>{
        console.log(err)
        res.status(400).json({error: "Mensaje no guardado"})}
    )
    
}

module.exports = {
    addMessage
}