import { Request, Response } from "express";
import BorrowedTicket from "../../models/borrowedTicketSchema";
import Controller from "../controller";

export default class BorrowedTicketController implements Controller {
    private static instance: BorrowedTicketController;
    private constructor() { }
    public static getInstance(): BorrowedTicketController {
        if (!BorrowedTicketController.instance) {
            BorrowedTicketController.instance = new BorrowedTicketController();
        }
        return BorrowedTicketController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const bors = await BorrowedTicket.find({})
            .populate("librarian")
            .populate("array_books")
        return res.json(bors)
    }
    public async GetById(req: Request, res: Response) {
        const bor = await BorrowedTicket.findById(req.params.Id)
            .populate("librarian")
            .populate("array_books")
        return res.json(bor);
    }
    public async Add(req: Request, res: Response) {
        const bor = await BorrowedTicket.create(req.body);
        if (bor) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }

        return;
    }

    public async Delete(req: Request, res: Response) {
        const bor = await BorrowedTicket.findByIdAndDelete(req.params.id)
        if (bor) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "Borrowed ticket not found" })
        }

        return;
    }
}