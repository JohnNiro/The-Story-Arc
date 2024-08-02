const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controller/books-controller");
const authMiddleware = require('../middleware/auth');


router.get("/",authMiddleware, booksController.getAllBooks);
router.post("/",authMiddleware, booksController.addBook);
router.get("/:id",authMiddleware, booksController.getById);
router.put("/:id",authMiddleware, booksController.updateBook);
router.delete("/:id",authMiddleware, booksController.deleteBook);

module.exports = router;