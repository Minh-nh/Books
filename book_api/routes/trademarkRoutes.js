import express from 'express'
import { getTrademark, getTrademarkList } from '../controllers/trademarkControllers.js'

const router = express.Router()

router.get("/", getTrademarkList)
router.get('/:Id', getTrademark)

export default router