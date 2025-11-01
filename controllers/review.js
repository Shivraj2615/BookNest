const Books = require("../models/books");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    const book = await Books.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user.id;

    book.reviews.push(newReview);

    await newReview.save();
    await book.save();

    res.redirect(`/books/${req.params.id}`);
}

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await Books.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/books/${id}`);
}