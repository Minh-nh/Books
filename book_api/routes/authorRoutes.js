import express from 'express'
import { getAuthorList, getAuthor, deleteAuthor } from '../controllers/authorControllers.js'

const router = express.Router()

router.get("/", getAuthorList)
router.get('/:Id', getAuthor)
router.route("/delete/:id").delete(deleteAuthor)
export default router