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
    
    static async getUserByEmailAndPwd(email, password){
        try{
            const user = await Users.findOne({email:email, password:password})
            if (user){
                return {message: "User found"}
            }else{
                return {status: 404, error : "User not found"}
            }
        }catch(error){
            return {status: 500, error : error}
        }
    }

    static async CreateUser(user){
        try{
            const newUser = new Users(user)
            const savedUser = await newUser.save()
            if (savedUser){
                return savedUser
            }else{
                return {status: 400, message : "User not created"}
            }
        }catch(error){
            return {status: 500, message : error}
        }
    }

    static async updateUser(id, user){
        try{
            const updatedUser = await Users.findByIdAndUpdate(id, user, {new: true})
            if (updatedUser){
                return {updatedUser}
            }else{
                return {status: 404, message : "User not found"}
            }
        }catch(error){
            return {status: 500, message : error}
        }
    }

    static async deleteUser(id){
        try{
            const deleteUser = await Users.findByIdAndUpdate(id, {status: 'inactive'}, {new: true})
            if (deleteUser){
                return {status: 200, message : "User deleted"}
            }else{
                return {status: 404, error : "User not found"}
            }
        }catch(error){
            return {statusCode: 500, error : error}
        }
    }

}

module.exports = {UsersService}