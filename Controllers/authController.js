const userSchema = require("../models/userSchema");

const { isValidEmail } = require("../utils/validation");

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {

    if (!fullName)
      return res.status(400).send({ message: "Full Name is required" });
    if (!email) return res.status(400).send({ message: "Email is required" });
    if (!isValidEmail(email))
      return res.status(400).send({ message: "Enter a valid email address" });
    if (!password)
      return res.status(400).send({ message: "Password is required" });

    const existingUser = await userSchema.findOne({ email });
    if (existingUser)
      return res.status(400).send({ message: "user with this already exists" });

    const user = new User({ fullName, email, password });
    await user.save();

    res.status(201).send({ message: "Registration successful" });
  } catch (error) {
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
   
if(!matchPass) return res.status(400).send({message:"incorrect password"})

    res.status(200).send({ message: "Login successful" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { signup, login };
