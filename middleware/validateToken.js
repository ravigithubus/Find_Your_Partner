const jwt=require('jsonwebtoken');

exports.validateToken=async(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        if(!token){
            res.status(404).json({message:"User is unauthorised"});
        }
        await jwt.verify(token,process.env.ACCESS_TOKEN_SECRETE,(err,decoded)=>{
            if(err){
                res.status(404).json({message:"User is unauthorised"});
            }
            req.user=decoded.user;
            next();
        })
    }
    else{
        res.status(404).json({message:"User is unauthorised"});
    }
}