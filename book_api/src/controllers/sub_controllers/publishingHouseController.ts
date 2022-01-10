import { Request, Response } from "express";
import PublishingHouse from "../../models/publishingHouseSchema";
import Controller from "../controller";

export default class PublishingHouseController implements Controller {
    private static instance: PublishingHouseController;
    private constructor() { }
    public static getInstance(): PublishingHouseController {
        if (!PublishingHouseController.instance) {
            PublishingHouseController.instance = new PublishingHouseController();
        }

        return PublishingHouseController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const pubs = await PublishingHouse.find({})
        return res.json(pubs)
    }
    public async GetById(req: Request, res: Response) {
        const pub = await PublishingHouse.findById(req.params.Id)
        return res.json(pub);
    }

    public async Add(req: Request, res: Response) {
        const pub = await PublishingHouse.create(req.body);
        if (pub) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
       
        return;
    }

    public async Delete(req: Request, res: Response) {
        const pub = await PublishingHouse.findByIdAndDelete(req.params.id)
        if (pub) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "Publishing house not found" })
        }
        return;
    }
}