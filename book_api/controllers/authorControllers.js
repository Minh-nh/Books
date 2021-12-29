import asyncHandler from "express-async-handler";
import Author from "../models/authorSchema.js";

const getAuthorList = asyncHandler(async (req, res) => {
    const authors = await Author.find({})
    res.json(authors);
});

const getAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.Id)
    res.json(author);
});

const deleteAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findByIdAndDelete(req.params.id)
    if (author) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Author not found" })
    }
});

export { getAuthorList, getAuthor, deleteAuthor };