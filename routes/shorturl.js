const express = require('express')
const { creatshorlUrl } = require('../Controllers/shortnerController')
const route = express.Router()

route.post("/creat",creatshorlUrl)
module.exports= route