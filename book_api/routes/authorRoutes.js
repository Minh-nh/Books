import express from 'express'
import { getAuthorList, getAuthor, addAuthor, deleteAuthor } from '../controllers/authorControllers.js'

const router = express.Router()

router.get("/", getAuthorList)
router.post("/add", addAuthor)
router.get('/:Id', getAuthor)
router.route("/delete/:id").delete(deleteAuthor)
export default router