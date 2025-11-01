const mongoose = require("mongoose");
const Review = require("./review.js");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Review,
    },
  ],
});

bookSchema.post("findOneAndDelete", async function (book) {
  if (book) {
    await Review.deleteMany({ _id: { $in: book.reviews } });
  }
});

const Books = new mongoose.model("Books", bookSchema);
module.exports = Books;
