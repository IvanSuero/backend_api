const express = require("express")
const router = express.Router()

const dataRouter = require("../routes/data.routes")

router.get('/data', dataRouter)

module.exports = router