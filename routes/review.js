const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const reviewController = require("../controllers/review.js");
const { isLoggedIn, isReviewOwner } = require("../middleware/auth.js");

router.post("/", isLoggedIn, wrapAsync(reviewController.createReview));

router.delete("/:reviewId", isLoggedIn, isReviewOwner, wrapAsync(reviewController.deleteReview));

module.exports = router;
