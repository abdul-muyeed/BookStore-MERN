import express from "express";
import { createBook, getBook, getBooks, updateBook } from "./book.controller.js";

const router = express.Router();

// create a new book
router.post("/create-book", createBook )

// get all books

router.get("/", getBooks)

// get a book by id
router.get("/:id", getBook)

// update a book by id
router.put("/edit/:id", updateBook)

// delete a book by id
router.delete("/delete/:id", deleteBook)

export default router;