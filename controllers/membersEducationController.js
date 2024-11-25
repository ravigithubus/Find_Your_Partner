const membersEducation=require('../models/memberEducationModel');

exports.createEducationDetails=async(req,res)=>{
    const educationDetails=req.body;
    const created=educationDetails.map(async(detail)=>{
        const {classOfStudy,nameOfStudySchooleOrCollege,boardOrUnivercity,yearOfStudy,gradeOfStudy}=detail;
        return  await membersEducation.create({classOfStudy,nameOfStudySchooleOrCollege,boardOrUnivercity,yearOfStudy,gradeOfStudy});
    })
    if(created){
        res.json({
            message:"Education is created",
            details:educationDetails
        })
    }else{
        res.json({
            message:"Education creation is failed.",
        })
    }
}

exports.getEducationDetails=async(req,res)=>{
    const details=await membersEducation.find();
    if(details){
        res.json(details);
    }else{
        res.json({
            message:"Error occured .."
        });
    }
}
