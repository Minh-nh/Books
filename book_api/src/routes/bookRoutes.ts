import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'
const router = express.Router()
var book = ControllerFactory.createController(ControllerType.BOOK)
router.get("/", book.GetAll)
router.post("/add", book.Add)
router.get("/search", book.GetByLikeName)
router.get("/author", book.GetByAuthor)
router.get("/:Id", book.GetById)
router.route("/delete/:id").delete(book.Delete)
export default router