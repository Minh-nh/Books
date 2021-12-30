import asyncHandler from "express-async-handler";
import PublishingHouse from "../models/publishingHouseSchema.js"

const getPublishingHouseList = asyncHandler(async (req, res) => {
    const publishingHouses = await PublishingHouse.find({})
    res.json(publishingHouses);
});

const getPublishingHouse = asyncHandler(async (req, res) => {
    const publishingHouse = await PublishingHouse.findById(req.params.Id)
    res.json(publishingHouse);
});

const addPublishingHouse = asyncHandler(async (req, res) => {
    const publishingHouse = await PublishingHouse.create(req.body);
    res.json(publishingHouse);
});

const deletePublishingHouse = asyncHandler(async (req, res) => {
    const publishingHouse = await PublishingHouse.findByIdAndDelete(req.params.id)
    if (publishingHouse) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Publishing House not found" })
    }
});

export { getPublishingHouseList, getPublishingHouse, addPublishingHouse, deletePublishingHouse };
