const jwt =require("jsonwebtoken")

const genarateAccessToken=(payload)=>{
     const token = jwt.sign(
     payload,
      process.env.JWT_SEC
    );
    res.cookie("mubin_token", token);

}

const verifiyToken=(token)=>{
    const decoded = jwt.verify(token, process.env.JWT_SEC);
 console.log(decoded);
 
    return decoded
}

module.exports={genarateAccessToken,verifiyToken}