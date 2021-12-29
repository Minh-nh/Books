import express from 'express'
import { getLibrarianList, authLibrarian } from '../controllers/librarianControllers.js'

const router = express.Router()

router.get("/", getLibrarianList)
router.get("/search/", authLibrarian)
// router.get("/:Id", getUser)

export default router