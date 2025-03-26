const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name :{String, required: true},
    email :{String, required: true, unique : true},
    password : {String, required: true},
    role : {String, required: true},
    status : {String, required: true},
})

const Users = mongoose.model('Users', userSchema)

module.exports = {Users}