// const { isValidUrl } = require("../utils/validation");
// const shortUrlSchema=require("../models/shortnerSchema");
// const shortnerSchema = require("../models/shortnerSchema");

// const genarateRandomStr = (length = 5) => {
//   const charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let RandomStr = "";

//   for (let i = 0; i < length; i++) {
//     const randomNumber = Math.floor(Math.random() * charecters.length);
//     RandomStr += charecters[randomNumber];
//   }
//   return
// };

// const creatshorlUrl = async (req, res) => {
//  try {
//    const { urlLong } = req.body;
//   if (!urlLong) return res.status(400).send({ messege: "Url is requred" });

//   if (!isValidUrl(urlLong))
//     return res.status(400).send({ messege: "invalid url" });


//   const urlShort=genarateRandomStr();

//   const urlData=new shortUrlSchema({
//     urlLong,
//     urlLong
//   })
//   urlData.save()
//   res.status(201).send({
//    Longurl:urlData.urlLong,
//    shorrUrl:urlData.urlShort
//   })
//  } catch (error) {
//   res.status(500).send({message:"server error"})
//  }
// };
// redirectToUrl= async (req,res)=>{
//   const params=req.params

//   if(!params.id) return
//   const urlData =await shortUrlSchema.findOne({urlShort:params.id})
//  if(!urlData)return res.redirect(` `)
//   res.redirect(urlData.urlLong)
 
// }

// module.exports={creatshorlUrl,redirectToUrl}
const { isValidUrl } = require("../utils/validation");
const shortUrlSchema = require("../models/shortnerSchema");

const genarateRandomStr = (length = 5) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let RandomStr = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    RandomStr += characters[randomNumber];
  }

  return RandomStr;
};


const creatshorlUrl = async (req, res) => {
  try {
    const { urlLong } = req.body;

    if (!urlLong)
      return res.status(400).send({ message: "Url is required" });

    if (!isValidUrl(urlLong))
      return res.status(400).send({ message: "Invalid URL" });

    const urlShort = genarateRandomStr();

    const urlData = new shortUrlSchema({
      urlLong,
      urlShort
    });

    await urlData.save();

    res.status(201).send({
      longUrl: urlData.urlLong,
      shortUrl: urlData.urlShort
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};


const redirectToUrl = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return;

    const urlData = await  shortUrlSchema.findOne({ urlShort: id });

    if (!urlData) return  res.redirect("/");

    res.redirect(urlData.urlLong);

  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = { creatshorlUrl, redirectToUrl };
