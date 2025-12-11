const express = require('express')
const route = require('./routes')
require('dotenv').config()
const dbconfig = require('./dbconfig')
const { isValidUrl } = require('./utils/validation')
const app = express()
app.use(express.json());
dbconfig()
app.use(route)

console.log(Math.floor(Math.random() * 100) + 1
);
  

app.listen(4000, () => {
  console.log(`server is running`)
})