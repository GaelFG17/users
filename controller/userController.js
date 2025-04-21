const {UsersService} = require('../service/usersService')

class UsersController{

    static async getUsers(req, res){
        const response = await UsersService.getUsers()
        if (response.status){
            res.status(response.status).json({message: response.message})
        }else{
            res.status(200).json(response.data)
        }
    }

    static async getUserByEmailAndPwd(req, res){
        const {email, password} = req.body
        const response = await UsersService.getUserByEmailAndPwd(email, password)
        if (response.error){
            res.status(response.status).json({message: response.error})
        }else{
            res.status(200).json(response.message)
        }
    }
}