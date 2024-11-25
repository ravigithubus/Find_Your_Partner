const User=require('../models/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.createUser=async(req,res)=>{
    const{name,gmail,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({name,gmail,password:hashedPassword});
    res.json({meassage:"User created",User:user})
}

exports.getAllUsers=async(req,res)=>{
    const users=await User.find();
    res.json(users);
}

exports.loginUser=async(req,res)=>{
    const {userName,password}=req.body;
    const user=await User.findOne({userName});
    if(user){
        if(await bcrypt.compare(password, user.password)){
            const accessToken=jwt.sign({
                user:{
                    username:user.name,
                    email:user.gmail,
                    id:user._id
                }
            },process.env.ACCESS_TOKEN_SECRETE,{expiresIn:"5m"});
            res.json({
                message:"Login Successful.",
                token:accessToken
            })
        }else{
            res.json({
                message:"Wrong password."
            })
        }
    }
    else{
        res.json({
            message:"Username is wrong"
        })
    }
}