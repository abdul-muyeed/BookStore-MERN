import { Book } from "./book.model.js";

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).send(newBook);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.status(200).send(books);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send("Book not found");
    return res.status(200).send(book);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) return res.status(404).send("Book not found");
    return res.status(200).send(updatedBook);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send("Book not found");
    return res.status(200).send("Book deleted");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

export { createBook, getBooks, getBook, updateBook, deleteBook };
