import asyncHandler from "express-async-handler";
import Product from "../models/productSchema.js";

const getProductList = asyncHandler(async (req, res) => {
    const products = await Product.find({})
        .populate("author")
        .populate("publishing_house")
    res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.Id)
        .populate("author")
        .populate("publishing_house")
    res.json(product);
});

const getProductLike = asyncHandler(async (req, res) => {
    const products = await Product.find({ name: { $regex: req.query.name } }).exec()
    res.json(products)
});

const getProductsOfAuthor = asyncHandler(async (req, res) => {
    const products = await Product.find({ author: req.query.id  }).exec()
    res.json(products)
});


const addProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (product) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Product not found" })
    }
});

export { getProductList, getProduct, getProductLike, deleteProduct, addProduct, getProductsOfAuthor };
