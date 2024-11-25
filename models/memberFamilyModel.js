const mongoose= require("mongoose");

const familyMemberSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Member is required."]
    },
    relationship:{
        type:String,
        required:[true,"Relationship is required"]
    },
    relationType:{
        type:String,
        required:[true,"Relation type is required."]
    },
    education:{
        type:String,
        required:[true,"Education is required"]
    }
});

module.exports=mongoose.model("familyMembers",familyMemberSchema);

//Family details (No of members)(relationship,educational details),Paternal and maternal 
