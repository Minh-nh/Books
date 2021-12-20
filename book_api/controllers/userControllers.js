import asyncHandler from "express-async-handler";
import User from "../models/userSchema.js";

const getUserList = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.Id);
    res.json(user);
});

const authUser = asyncHandler(async (req, res) => {
    const user=await User.findOne({
        TenTK:req.query.email,
        MK:req.query.password
    })
    res.json(user)
});
export { getUserList, getUser, authUser };
