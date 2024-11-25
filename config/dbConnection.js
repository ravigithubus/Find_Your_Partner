const mongoose=require('mongoose');
const connectDB=async()=>
{
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to database",connect.connection.name);
    }catch{
        throw console.erro("Error Occured");
        
    }
}
module.exports=connectDB;