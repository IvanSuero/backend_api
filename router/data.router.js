const express = require("express")
const router = express.Router()
const columns = require("../sampleColumns")

const productController = require("../controllers/productController")

router.get('/data/products', productController.getAllProducts)

router.get('/columns', (req, res) => res.json({columns: columns}))

module.exports = router