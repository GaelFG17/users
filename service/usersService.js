const {Users} = require('../model/usersModel')

class UsersService{

    static async getUsers(){
        try{
            const users = await Users.find()
            if (users.length > 0){
                return {status: 200, data : users}
            }else{
                return {status: 404, message : "Users not found"}
            }
        }catch(error){
            return {status: 500, message : error}
        }
    }

}