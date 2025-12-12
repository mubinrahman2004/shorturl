const userSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const { isValidEmail } = require("../utils/validation");
const { genarateAccessToken } = require("../utils/token");

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName)
      return res.status(400).send({ message: "Full Name is required" });

    if (!email) return res.status(400).send({ message: "Email is required" });

    if (!password)
      return res.status(400).send({ message: "Password is required" });

    const existingUser = await userSchema.findOne({ email });

    if (existingUser)
      return res.status(400).send({ message: "User already exists" });

    const user = new userSchema({ fullName, email, password });

    user.save();

    res.status(201).send({ message: "Registration successful" });
  } catch (error) {
    console.log(error); // এখানে error দেখলে আসল কারণ বোঝা যাবে
    res.status(500).send({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) return res.status(400).send({ message: "Email is required" });
    if (!isValidEmail(email))
      return res.status(400).send({ message: "enter a valid email " });
    if (!password)
      return res.status(400).send({ message: "Password is required" });

    const existingUser = await userSchema.findOne({ email });
    if (!existingUser)
      return res.status(400).send({ message: "User not found" });

    const matchPass = await existingUser.comparePassword(password);
    console.log(matchPass);

    if (!matchPass)
      return res.status(400).send({ message: "incorrect password" });

     const token=genarateAccessToken({id:existingUser._id,email:existingUser.email})

     res.cookie("acc_token",token)

    res.status(200).send({ message: "Login successful", acc_token: token });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { signup, login };

