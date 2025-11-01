const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_KEY = "secretkey";

module.exports.getRegister = async (req, res) => {
  res.render("user/register.ejs");
};

module.exports.postRegister = async (req, res) => {
  let { email, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    let newUser = new User({ email, password: hashedPass });
    await newUser.save();
    console.log("User Registered Successfully");
    res.redirect("/books/login");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.getLogin = async (req, res) => {
  res.render("user/login.ejs");
};

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) return res.status(401).send("User Not Found");

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid Password");

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_KEY);
    // res.json({ token });
    res.cookie("token", token, { httpOnly: true, secure: false });

    res.redirect("/books");
  } catch (err) {
    res.status(401).send(err.message);
  }
};

module.exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/books/login");
};
