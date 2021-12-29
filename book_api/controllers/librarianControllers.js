import asyncHandler from "express-async-handler";
import Librarian from "../models/librarianSchema.js";

const getLibrarianList = asyncHandler(async (req, res) => {
    const librarians = await Librarian.find({});
    res.json(librarians);
});

// const getEmployee = asyncHandler(async (req, res) => {
//     const employee = await Employee.findById(req.params.Id);
//     res.json(employee);
// });

const authLibrarian = asyncHandler(async (req, res) => {
    const librarian = await Librarian.findOne({
        CMND: req.query.username,
        password: req.query.password
    })
    res.json(librarian)
});
export { getLibrarianList, authLibrarian };
