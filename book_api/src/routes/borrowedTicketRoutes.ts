import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'
const router = express.Router()
var bor = ControllerFactory.createController(ControllerType.BORROWED_TICKET)
router.get("/", bor.GetAll)
router.post("/add", bor.Add)
router.get("/:Id", bor.GetById)
router.route("/delete/:id").delete(bor.Delete)
export default router