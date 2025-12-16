
const jwt = require("jsonwebtoken");

const genarateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SEC, {
    expiresIn: "1d",
  });
};

const verifiyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SEC);
};

module.exports = { genarateAccessToken, verifiyToken };
