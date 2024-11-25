const mongoose=require('mongoose');

const memberSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please add firstName of the member."]
    },
    lastName:{
        type:String,
        required:[true,"Please add  lastName of the member."]
    },
    dateOfBirth:{
        type:String,
        required:[true,"Please add date of birth of the member."]
    },
    imgUrl:{
        type:String,
        required:[true,"Please add gmail of the member."]
    },
    gmail:{
        type:String,
        required:[true,"Please add gmail of the member."]
    },
    phone:{
        type:String,
        required:[true,"Please add about of the member."]
    },
    aboutMember:{
        type:String,
        required:[true,"Please add about of the member ."]
    },
    hobbies:{
        type:String,
        required:[true,"Please add hobbies of the member ."]
    },
    likes:{
        type:String,
        required:[true,"Please add likes of the member ."]
    },
    facebookUrl:{
        type:String,
        required:[true,"Please add facebook url of the member ."]
    },
    instagramUrl:{
        type:String,
        required:[true,"Please add instagram url of the member ."]
    },
    xUrl:{
        type:String,
        required:[true,"Please add X url of the member ."]
    },
    linkdinUrl:{
        type:String,
        required:[false,"Please add linkdin url of the member ."]
    },
})

module.exports=mongoose.model("Members",memberSchema);


//First name Middle Last photoUrl Date of birth Current add (Line 1 Line 2 Line 3  City state country )Permanent
//About ,Hobbies,Likes,Social media(facebook,insta,Linkdin),X account 