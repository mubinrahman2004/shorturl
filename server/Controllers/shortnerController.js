// const { isValidUrl } = require("../utils/validation");
// const shortUrlSchema = require("../models/shortnerSchema");

// const genarateRandomStr = (length = 5) => {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let RandomStr = "";

//   for (let i = 0; i < length; i++) {
//     const randomNumber = Math.floor(Math.random() * characters.length);
//     RandomStr += characters[randomNumber];
//   }

//   return RandomStr;
// };

// const creatshorlUrl = async (req, res) => {
//   try {
//     const { urlLong } = req.body;
//     console.log("user", req, res);

//     if (!urlLong) return res.status(400).send({ message: "Url is required" });

//     if (!isValidUrl(urlLong))
//       return res.status(400).send({ message: "Invalid URL" });

//     const urlShort = genarateRandomStr();
//     console.log("Generated short url:", urlShort);

//     const urlData = new shortUrlSchema({
//       urlLong,
//       urlShort,
//       user: req.user?.id,
//     });

//     await urlData.save();

//     res.status(201).send({
//       longUrl: urlData.urlLong,
//       shortUrl: urlData.urlShort,
//     });
//   } catch (error) {
//     res.status(500).send({ message: "Server error" });
//   }
// };

// const redirectToUrl = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id) return;

//     const urlData = await shortUrlSchema.findOne({ urlShort: id });
//     console.log(urlData);

//     if (!urlData) return res.redirect(process.env.CREAT_URL + urlData.urlShort);

//     if (urlData.user) {
//       urlData.visitHistory.push({ visitTime: Date.now() });
//       urlData.save();
//     }
//     res.redirect(urlData.urlLong);
//   } catch (error) {
//     res.status(process.env.CREAT_URL + urlData.urlShort);
//   }
// };
// const  getShortUrls = async(req,res)=>{
// try {
// const user=req.user

// const urlHistory=await shortUrlSchema.find({user:user.id}).select("-user")

// // console.log(urlHistory);
// console.log(req,res);


// res.status(200).send(urlHistory)

  
// } catch (error) {
//   res.status(500).send({message:"server error"})
// }



// }

// module.exports = { creatshorlUrl, redirectToUrl,getShortUrls };
const shortUrlSchema = require("../models/shortnerSchema");
const { isValidUrl } = require("../utils/validation");

const genarateRandomStr = (length = 5) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
};

const creatshorlUrl = async (req, res) => {
  try {
    const { urlLong } = req.body;

    if (!isValidUrl(urlLong))
      return res.status(400).send({ message: "Invalid URL" });

    const urlShort = genarateRandomStr();

    const urlData = new shortUrlSchema({
      urlLong,
      urlShort,
      user: req.user.id,
    });

    await urlData.save();

    res.status(201).send({
      shortUrl: urlShort,
      longUrl: urlLong,
    });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

const redirectToUrl = async (req, res) => {
  const urlData = await shortUrlSchema.findOne({
    urlShort: req.params.id,
  });

  if (!urlData) return res.status(404).send("URL not found");

  res.redirect(urlData.urlLong);
};

const getShortUrls = async (req, res) => {
  const urls = await shortUrlSchema
    .find({ user: req.user.id })
    .select("-user");

  res.status(200).send(urls);
};

module.exports = { creatshorlUrl, redirectToUrl, getShortUrls };
