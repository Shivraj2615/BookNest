const sampleBooks = require("./data");
const Books = require("../models/books");

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

const initDB = async () => {
    await Books.deleteMany({});
    await Books.insertMany(sampleBooks.data);
    console.log("data was initialized");
};

initDB();
