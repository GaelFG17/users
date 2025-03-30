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


}