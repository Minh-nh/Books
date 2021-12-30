import express from 'express'
import { getPublishingHouseList, getPublishingHouse, addPublishingHouse, deletePublishingHouse } from '../controllers/publishingHouseControllers.js'

const router = express.Router()

router.get("/", getPublishingHouseList)
router.post("/add", addPublishingHouse)
router.get('/:Id', getPublishingHouse)
router.route("/delete/:id").delete(deletePublishingHouse)
export default router