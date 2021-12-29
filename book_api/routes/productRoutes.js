import express from 'express'
import { getProductList, getProduct, getProductLike, deleteProduct, addProduct } from '../controllers/productControllers.js'

const router = express.Router()

router.get("/", getProductList)
router.post("/add", addProduct)
router.get("/search", getProductLike)
router.get('/:Id', getProduct)
router.route("/delete/:id").delete(deleteProduct)


export default router