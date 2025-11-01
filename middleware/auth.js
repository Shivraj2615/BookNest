const jwt = require("jsonwebtoken");
const Books = require("../models/books");
const Review = require("../models/review");

module.exports.isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/books/login");
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    res.locals.currentUser = decoded;
    next();
  } 
  catch (err) {
    return res.redirect("/books/login");
  }
};

module.exports.isBookOwner = async (req, res, next) => {
  const { id } = req.params;
  
  const book = await Books.findById(id);
  
  if (!book.owner.equals(req.user.id)) {
    return res.send("You do not have permission to do that!");
  }
  next();
};

module.exports.isReviewOwner = async (req, res, next) => {
  const { reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (!review.author.equals(req.user.id)) {
    return res.send("You do not have permission to delete this review!");
  }
  next();
};
