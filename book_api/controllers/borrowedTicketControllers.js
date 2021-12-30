import asyncHandler from "express-async-handler";
import BorrowedTicket from '../models/borrowedTicketSchema.js'

const getBorrowedTicketList = asyncHandler(async (req, res) => {
    const borrowedTicketes = await BorrowedTicket.find({})
        .populate("librarian")
        .populate("array_books")
    res.json(borrowedTicketes);
});

// const getProduct = asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.Id)
//     .populate("author")
//     .populate("publishing_house")
//     res.json(product);
// });

const addBorrowedTicket = asyncHandler(async (req, res) => {
    const borrowedTicket = await BorrowedTicket.create(req.body);
    res.json(borrowedTicket);
});

export { getBorrowedTicketList, addBorrowedTicket };
