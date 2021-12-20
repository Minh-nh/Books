import asyncHandler from "express-async-handler";
import Trademark from "../models/trademarkSchema.js";

const getTrademarkList = asyncHandler(async (req, res) => {
    const trademarks = await Trademark.find({});
    res.json(trademarks);
});

const getTrademark = asyncHandler(async (req, res) => {
    const trademark = await Trademark.findById(req.params.Id);
    res.json(trademark);
});

export { getTrademarkList, getTrademark };