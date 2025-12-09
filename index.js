const express = require('express')
const route = require('./routes')
require('dotenv').config()
const dbconfig = require('./dbconfig')
const { isValidUrl } = require('./utils/validation')
const app = express()
app.use(express.json());
dbconfig()
app.use(route)

console.log(isValidUrl("https://github.com/mubinrahman2004/branch-1"));


app.listen(3000, () => {
  console.log(`server is running`)
})