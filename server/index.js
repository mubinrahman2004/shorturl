const express = require('express')
const cors = require('cors');
const dbconfig = require('./dbconfig')
require('dotenv').config()
const route = require('./routes')
const cookieparser =require("cookie-parser")
const { isValidUrl } = require('./utils/validation')
const app = express()
app.use(express.json());
app.use(cookieparser());
app.use(cors({
  origin:"http://localhost:5174",
  credentials:true
}));

dbconfig()
app.use(route)

  

app.listen(8000, () => {
  console.log(`server is running`)
})