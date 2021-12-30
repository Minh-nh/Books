import express from 'express'
import { getBorrowedTicketList, addBorrowedTicket } from '../controllers/borrowedTicketControllers.js'
const router = express.Router()

router.get("/", getBorrowedTicketList)
router.post("/add", addBorrowedTicket)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router