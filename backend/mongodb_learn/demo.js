const {MongoClient} = require('mongodb')
const mongoose = require("mongoose")

const user = require("../src/models/users")

const dummyUser = new user({
    "user_name":"abcdef",
    "first_name":"abc",
    "last_name":"abc",
    "email":"abc",
    "contact":123,
    "age":12,
    "password":"abc"
})



const main = async()=>{
    try{
        await mongoose.connect("mongodb+srv://root:demoPassword@socialmedia.3ldfg.mongodb.net/SocialMedia?retryWrites=true&w=majority");
        dummyUser.save().then(result =>{
            console.log("result", result)
        }).catch(error=>console.log(error.message));
    }catch(e){
        console.error(e.message);
    }
}


main()