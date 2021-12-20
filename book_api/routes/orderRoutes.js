import express from 'express'
import { getOrder, getOrderList } from '../controllers/orderControllers.js'

const router = express.Router()

router.get("/", getOrderList)
router.get('/:Id', getOrder)

export default router