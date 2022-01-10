import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var pub = ControllerFactory.createController(ControllerType.PUBLISHING_HOUSE);
router.get("/", pub.GetAll)
router.post("/add", pub.Add)
router.get("/:Id", pub.GetById)
router.route("/delete/:id").delete(pub.Delete)
export default router