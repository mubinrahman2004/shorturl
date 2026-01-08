const { verifiyToken } = require("../utils/token");

const isAuthintic = (req, res, next) => {
  try {
    const token = req.cookies.acc_token;
    const decoded = verifiyToken(token);
    req.user = decoded;

    next();
  } catch (error) {
    next();
  }
};
// const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.cookies.acc_token;
//     const decoded = verifiyToken(token);
//     if (!token || !decoded)
//       return res.status(401).send({ message: "unauthorized request" });
//     req.user = decoded;
//     next()
//   } catch (error) {
//     res.status(500).send({ message: "unauthorize request" });
//   }
// };

// module.exports = { isAuthintic, authMiddleware };
const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.acc_token;
    if (!token) return res.status(401).send({ message: "Unauthorized" });

    const decoded = verifiyToken(token); // jwt verify
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized" });
  }
};
module.exports = { isAuthintic, authMiddleware };
