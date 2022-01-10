import { Request, Response } from "express";
import Author from "../../models/authorSchema";
import Controller from "../controller";

export default class AuthorController implements Controller {
    private static instance: AuthorController;
    private constructor() { }
    public static getInstance(): AuthorController {
        if (!AuthorController.instance) {
            AuthorController.instance = new AuthorController();
        }

        return AuthorController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const authors = await Author.find({})
        return res.json(authors)
    }
    public async GetById(req: Request, res: Response) {
        const author = await Author.findById(req.params.Id)
        return res.json(author);
    }

    public async Add(req: Request, res: Response) {
        const author = await Author.create(req.body);
        if (author) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const author = await Author.findByIdAndDelete(req.params.id)
        if (author) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "Author not found" })
        }
        return;
    }
}