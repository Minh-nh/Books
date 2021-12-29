import express from 'express'
import { getPublishingHouseList, getPublishingHouse, deletePublishingHouse } from '../controllers/publishingHouseControllers.js'

const router = express.Router()

router.get("/", getPublishingHouseList)
router.get('/:Id', getPublishingHouse)
router.route("/delete/:id").delete(deletePublishingHouse)
export default router