import express from 'express'
import { getUser, getUserList, authUser } from '../controllers/userControllers.js'

const router = express.Router()

router.get("/", getUserList)
router.get("/search/", authUser)
router.get("/:Id", getUser)

export default router