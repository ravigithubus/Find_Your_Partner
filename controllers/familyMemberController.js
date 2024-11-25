const familyMembers=require('../models/memberFamilyModel')

exports.createFamilyMember=async(req,res)=>{
    const members=req.body;
    for(let i=0;i<members.length;i++){
        const {name,relationship,relationType,education}=members[i];
        await familyMembers.create({name,relationship,relationType,education});
    }
    res.json({
        message:"Member of family created.",
        member:members
    }) 
}

exports.getAllFamilyMembers=async(req,res)=>{
    const members=await familyMembers.find();
    res.json(members);
}
