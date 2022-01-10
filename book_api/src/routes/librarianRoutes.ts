import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var lib = ControllerFactory.createController(ControllerType.LIBRARIAN);
router.get("/", lib.GetAll)
router.get("/search/", lib.AuthLibrarian)
router.post("/add", lib.Add)
router.get("/:Id", lib.GetById)
router.route("/delete/:id").delete(lib.Delete)
export default router