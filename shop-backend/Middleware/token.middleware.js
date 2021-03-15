
const jwt =require('jsonwebtoken');

module.exports.verifyJwt= function(req,res,next){
    const token= req.headers["x-access-token"];
    if(!token){
      res.json({auth:false, message:"you need a token"})
    }else
      jwt.verify(token,"jwtsecret",(err,decoded)=>{
        if(err){
          res.json({auth:false, message:"you fail in authenticate !"})
        }
        else{
          req.userId=decoded.id;
          
          next();
        }
    })
}
