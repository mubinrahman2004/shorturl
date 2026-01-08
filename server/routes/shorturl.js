// const express = require('express')
// const { creatshorlUrl, getShortUrls } = require('../Controllers/shortnerController')
// const { authMiddleware, isAuthintic } = require('../middleware/authMiddleware')
// const route = express.Router()

// route.post("/creat",isAuthintic,creatshorlUrl)
// route.get("/getall",authMiddleware,getShortUrls)
// module.exports= route
const express = require("express");
const { creatshorlUrl, getShortUrls } = require("../Controllers/shortnerController");
const { authMiddleware } = require("../middleware/authMiddleware");

const route = express.Router();

route.post("/creat", authMiddleware, creatshorlUrl);
route.get("/getall", authMiddleware, getShortUrls);

module.exports = route;
