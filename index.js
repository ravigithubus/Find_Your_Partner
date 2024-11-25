const express=require('express');
const dotenv=require('dotenv').config();
const PORT=process.env.PORT || 3000;
const app=express();
const memberRoute=require("./routes/memberRoute");
const userRoute=require("./routes/userRoute")
const familyMemberRoute=require("./routes/memberFamilyRoute")
const memberEducationRoute=require("./routes/memberEducationRoute")
const connectDB=require("./config/dbConnection");
connectDB();
app.use(express.json());
app.use('/members',memberRoute);
app.use('/users',userRoute);
app.use('/family',familyMemberRoute);
app.use('/education',memberEducationRoute);
app.listen(PORT,()=>{
    console.log(`Serrver has started ${PORT}`);
})