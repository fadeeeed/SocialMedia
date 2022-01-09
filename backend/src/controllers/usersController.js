const express = require("express")
const mongoose = require("mongoose")
const app = express();

const user = require("../models/users")


exports.signUp = async (req,res,next)=>{
    const signUpUser = new user({
        "user_name":req.body.user_name,
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "email":req.body.email,
        "contact":req.body.contact,
        "age":req.body.age,
        "password":req.body.password
    })
    try{
        await mongoose.connect("mongodb+srv://root:demoPassword@socialmedia.3ldfg.mongodb.net/SocialMedia?retryWrites=true&w=majority");
        
    }catch(e){
        res.statusCode=500;
        res.json({"message":"Server Error","statusCode":400});
    }
    signUpUser.save().then(result =>{
        console.log("result", result)
        res.json({"message":"success","statusCode":200})
    }).catch(error=>{
        console.log(error)
        res.statusCode=400;
        res.json({"message":"duplicate_entry","statusCode":400});
    })
}

exports.logIn = async (req,res,next)=>{
    const user_name = req.body.user_name;
    const password = req.body.password;
    try{
        await mongoose.connect("mongodb+srv://root:demoPassword@socialmedia.3ldfg.mongodb.net/SocialMedia?retryWrites=true&w=majority");
        user.find({user_name:user_name, password:password},function(err,data){
            if(err){
                res.statusCode=400;
                res.json({"message":"UserName/Password is incorrect","statusCode":400,})
            }
            else{
                if(data.length){
                    res.statusCode=200;
                    res.json({"messgage":"success","statusCode":200,"data":data})
                }
                else{
                    res.statusCode=400;
                    res.json({"message":"UserName/Password is incorrect","statusCode":400,})
                }
            }
        })
    }catch(e){
        res.statusCode=500;
        res.json({"message":"Server Error","statusCode":500});
    }
}

exports.getUser = async(req,res,next) =>{
    const user_name = req.body.user_name;
    try{
        await mongoose.connect("mongodb+srv://root:demoPassword@socialmedia.3ldfg.mongodb.net/SocialMedia?retryWrites=true&w=majority");
        user.find({user_name:user_name},function(err,data){
            if(err){
                res.statusCode=400;
                res.json({"message":"UserName/Password is incorrect","statusCode":400,})
            }
            else{
                if(data.length){
                    res.statusCode=200;
                    res.json({"messgage":"success","statusCode":200,"data":data})
                }
                else{
                    res.statusCode=400;
                    res.json({"message":"UserName/Password is incorrect","statusCode":400,})
                }
            }
        })
    }catch(e){
        res.statusCode=500;
        res.json({"message":"Server Error","statusCode":500});
    }
}