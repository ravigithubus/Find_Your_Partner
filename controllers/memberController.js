const Members=require('../models/memberModel')

exports.getMembers=async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const members=await Members.find().skip(skip).limit(limit);
    const total = await Members.countDocuments();
    res.json({total,members});
}

exports.createMember=async(req,res)=>{
        const {firstName,
            lastName,
            dateOfBirth,
            imgUrl,
            gmail,
            phone,
            aboutMember,
            hobbies,
            likes,
            facebookUrl,
            instagramUrl,
            xUrl,
            linkdinUrl}=req.body;
        const member=await Members.create({
            firstName,
            lastName,
            dateOfBirth,
            imgUrl,
            gmail,
            phone,
            aboutMember,
            hobbies,
            likes,
            facebookUrl,
            instagramUrl,
            xUrl,
            linkdinUrl
        })
        res.json({message:"User Created",member:member});
}
exports.updateMember=async(req,res)=>{
        const updatedMember=await Members.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedMember);
}

exports.deleteMember=async(req,res)=>{
    const id=req.params.id;
    const member=await Members.deleteOne({_id:id});
   res.json(member);
}





// firstName,
// lastName,
// dateOfBirth,
// imgUrl,
// gmail,
// phone,
// aboutMember,
// hobbies,
// likes,
// facebookUrl,
// instagramUrl,
// xUrl,
// linkdinUrl,