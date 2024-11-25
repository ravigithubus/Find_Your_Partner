const mongoose=require('mongoose');

const memberEducationSchema=mongoose.Schema({
    classOfStudy:{
        type:String,
        required:[true,"Class of is required"]
    },
    nameOfStudySchooleOrCollege:{
        type:String,
        required:[true,"Name Of Study Schoole Or College is required"]
    },
    boardOrUnivercity:{
        type:String,
        required:[true,"Name Of Board Or Univercity is required"]
    },
    yearOfStudy:{
        type:String,
        required:[true,"Year of study is required"]
    },
    gradeOfStudy:{
        type:String,
        required:[true,"Grade of study is required"]
    }
})

module.exports=mongoose.model("membersEducation",memberEducationSchema);

//Education details (SSC,HSC,grad,PG,Phd)-School,College,Univercity,Year,Grade