const express = require('express')
const { creatshorlUrl } = require('../Controllers/shortnerController')
const { authMiddleware } = require('../middleware/authMiddleware')
const route = express.Router()

route.post("/creat",authMiddleware,creatshorlUrl)
module.exports= route