import express from 'express'
import { getProductList } from '../controllers/productControllers.js'

const router = express.Router()

router.get("/", getProductList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router