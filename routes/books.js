const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const bookController = require("../controllers/books.js");
const { isLoggedIn, isBookOwner } = require("../middleware/auth.js");

//Index Route
router.get("/", wrapAsync(bookController.indexPage));

//New Route
router.get("/new", isLoggedIn, bookController.newBookForm);

//Show Route
router.get("/:id", wrapAsync(bookController.showBook));

//Create Route
router.post("/", isLoggedIn, wrapAsync(bookController.createBook));

//Edit Route
router.get("/:id/edit", isLoggedIn, isBookOwner, wrapAsync(bookController.editBook));

//Update Route
router.put("/:id", isBookOwner, isLoggedIn, wrapAsync(bookController.updateBook));

//Delete
router.delete("/:id/delete", isLoggedIn, isBookOwner, wrapAsync(bookController.deleteBook));

module.exports = router;
