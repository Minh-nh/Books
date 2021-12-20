import asyncHandler from "express-async-handler";
import Product from "../models/productSchema.js";

const getProductList = asyncHandler(async (req, res) => {
    const products = await Product.find({})
        // .populate({
        //     path: "ThuongHieu"
        // })
    res.json(products);
});

// const getProduct = asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.Id);
//     res.json(product);
// });

// const getProductLike=asyncHandler(async(req,res)=>{
//     const products=await Product.find({ TenSP: { $regex: req.query.name } })
//     res.json(products)
// });

// const addProduct = asyncHandler(async (req, res) => {
//     const product = await Product.create(req.body);
//     res.json(product);
// });
export { getProductList };
