const { verifiyToken } = require("../utils/token");

const authMiddleware=(req,res,next)=>{
  try {
      const token =req.cookies.acc_token
    const decoded=verifiyToken(token)
    req.user=decoded;

    
    next()

  } catch (error) {
   
    next()
  }
   
     
}
module.exports={authMiddleware}  