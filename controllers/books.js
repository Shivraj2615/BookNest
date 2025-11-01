const Books = require("../models/books");

module.exports.indexPage = async (req, res) => {
  try {
    const { search } = req.query;
    let allBooks;

    if (search) {
      const regex = new RegExp(search, "i");
      allBooks = await Books.find({ title: regex });
    } else {
      allBooks = await Books.find({});
    }
    res.render("books/index.ejs", { allBooks, search });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something Went Wrong");
  }
};

module.exports.newBookForm = (req, res) => {
  res.render("books/new.ejs");
};
 
module.exports.showBook = async (req, res) => {
  let { id } = req.params;
  let Book = await Books.findById(id)
    .populate("owner", "email")
    .populate({
      path: "reviews",
      populate: {
        path: "author",
        select: "email",
      },
    });
  res.render("books/show.ejs", { Book });
};

module.exports.createBook = async (req, res, next) => {
  const newBook = new Books(req.body.book);
  newBook.owner = req.user.id;
  await newBook.save();
  res.redirect("/books");
};

module.exports.editBook = async (req, res) => {
  let { id } = req.params;
  let book = await Books.findById(id);
  res.render("books/edit.ejs", { book });
};

module.exports.updateBook = async (req, res) => {
  let { id } = req.params;
  await Books.findByIdAndUpdate(id, { ...req.body.book });
  res.redirect(`/books/${id}`);
};

module.exports.deleteBook = async (req, res) => {
  let { id } = req.params;
  await Books.findByIdAndDelete(id);
  res.redirect("/books");
};
