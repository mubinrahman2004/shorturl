const mongoose = require("mongoose");

const dbconfig = () => {
  return mongoose .connect(process.env.DB_STRING).then(() => console.log("Connected!"));
};

module.exports = dbconfig;
