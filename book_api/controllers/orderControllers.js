import asyncHandler from "express-async-handler";
import Order from "../models/orderSchema.js";

const getOrderList = asyncHandler(async (req, res) => {
    const orders = await Order.find({})
        .populate({
            path: "User"
        })
        .populate({
            path: "DanhSachSanPham.SanPham"
        })
    res.json(orders);
});

const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.Id);
    res.json(order);
});

export { getOrderList, getOrder };
