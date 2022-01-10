import { Request, Response } from "express";
import Librarian from "../../models/librarianSchema";
import Controller from "../controller";


export default class LibrarianController implements Controller {
    private static instance: LibrarianController;
    private constructor() { }
    public static getInstance(): LibrarianController {
        if (!LibrarianController.instance) {
            LibrarianController.instance = new LibrarianController();
        }

        return LibrarianController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const libs = await Librarian.find({})
        return res.json(libs)
    }
    public async GetById(req: Request, res: Response) {
        const lib = await Librarian.findById(req.params.Id)
        return res.json(lib);
    }

    public async Add(req: Request, res: Response) {
        const lib = await Librarian.create(req.body);
        if (lib) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const lib = await Librarian.findByIdAndDelete(req.params.id)
        if (lib) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "Librarian not found" })
        }
        return;
    }

    public async AuthLibrarian(req: Request, res: Response) {
        const lib = await Librarian.findOne({
            CMND: req.query.username,
            password: req.query.password
        })
        return res.json(lib)
    }
}