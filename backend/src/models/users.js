const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UsersSchema = new Schema({
    user_name :{
        type: String,
        required: true,
        unique: true
    },
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
    },
    email :{
        type: String,
        required: true,
        unique:true
    },
    password :{
        type: String,
        required: true
    },
    age:{
        type:Number,
    },
    contact:{
        type:Number,    
    },
});

module.exports = Users = mongoose.model('signUp',UsersSchema);