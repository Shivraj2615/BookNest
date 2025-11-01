const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_KEY = "secretkey";

module.exports.getRegister = async (req, res) => {
  res.render("user/register.ejs");
};

module.exports.postRegister = async (req, res) => {
  let { email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  let newUser = new User({ email, password: hashedPass });
  await newUser.save();
  req.flash("success", "You Registered Successfully");
  res.redirect("/books/login");
};

module.exports.getLogin = async (req, res) => {
  res.render("user/login.ejs");
};

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (!user) return res.status(401).send("User Not Found");

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send("Invalid Password");

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_KEY);
  // res.json({ token });
  res.cookie("token", token, { httpOnly: true, secure: false });

  req.flash("success", "Welcome to BookNest!");

  res.redirect("/books");
};

module.exports.logout = (req, res) => {
  res.clearCookie("token");
  req.flash("success", "Logged out successfully!");
  res.redirect("/books/login");
};
