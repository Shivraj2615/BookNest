const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const booksRoute = require("./routes/books.js");
const reviewRoute = require("./routes/review.js");
const authRoutes = require("./routes/auth");

const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/BookNest";

async function main() {
  await mongoose.connect(MONGO_URL);
};

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser());

app.use((req, res, next) => {
  const token = req.cookies.token;
  // console.log("Token in middleware:", token);
  res.locals.currentUser = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, "secretkey");
      // console.log("Decoded User:", decoded);
      res.locals.currentUser = decoded;
    } catch (err) {
      console.log("JWT Verify Error:", err.message);
    }
  }
  next();
});

app.use("/books", authRoutes);
app.use("/books", booksRoute);
app.use("/books/:id/reviews", reviewRoute);

app.listen(3000, () => {
    console.log("Server Listening on Port 3000");
});

