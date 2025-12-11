const { isValidUrl } = require("../utils/validation");
const shortUrlSchema=require("../models/shortnerSchema");
const shortnerSchema = require("../models/shortnerSchema");

const genarateRandomStr = (length = 5) => {
  const charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let RandomStr = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * charecters.length);
    RandomStr += charecters[randomNumber];
  }
  return
};

const creatshorlUrl = async (req, res) => {
 try {
   const { urlLong } = req.body;
  if (!urlLong) return res.status(400).send({ messege: "Url is requred" });

  if (!isValidUrl(urlLong))
    return res.status(400).send({ messege: "invalid url" });


  const urlShort=genarateRandomStr();

  const urlData=new shortUrlSchema({
    urlLong,
    urlLong
  })
  urlData.save()
  res.status(201).send({
   Longurl:urlData.urlLong,
   shorrUrl:urlData.urlShort
  })
 } catch (error) {
  res.status(500).send({message:"server error"})
 }
};
redirectToUrl= async (req,res)=>{
  const params=req.params

  if(!params.id) return
  const urlData =await shortUrlSchema.findOne({urlShort:params.id})
 if(!urlData)return res.redirect(` `)
  res.redirect(urlData.urlLong)
 
}

module.exports={creatshorlUrl,redirectToUrl}