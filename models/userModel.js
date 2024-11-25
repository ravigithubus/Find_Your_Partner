const mongoose=require('mongoose');

const userShema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide name"]
    },
    gmail:{
        type:String,
        required:[true,"Please provide gmail"]
    },
    password:{
        type:String,
        required:[true,"Please provide required password"]
    }
});

module.exports=mongoose.model("User",userShema);