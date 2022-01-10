import { Request, Response } from "express";
import Book from "../../models/bookSchema";
import Controller from "../controller";


export default class BookController implements Controller {
    private static instance: BookController;
    private constructor() { }
    public static getInstance(): BookController {
        if (!BookController.instance) {
            BookController.instance = new BookController();
        }

        return BookController.instance;
    }

    public async GetAll(_: Request, res: Response) {
        const books = await Book.find({})
            .populate("author")
            .populate("publishing_house")
        return res.json(books)
    }

    public async GetById(req: Request, res: Response) {
        const book = await Book.findById(req.params.Id)
            .populate("author")
            .populate("publishing_house")
        return res.json(book);
    }

    public async GetByLikeName(req: Request, res: Response) {
        const books = await Book.find({ name: { $regex: req.query.name } }).exec()
        return res.json(books);
    }

    public async GetByAuthor(req: Request, res: Response) {
        const books = await Book.find({ author: req.query.id }).exec()
        return res.json(books);
    }

    public async Add(req: Request, res: Response) {
        const book = await Book.create(req.body);
        if (book) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (book) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "Book not found" })
        }
        return;
    }
}