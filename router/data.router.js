const express = require("express")
const router = express.Router()
const columns = require("../sampleColumns")

const productController = require("../controllers/productController")

router.get('/data/products', productController.getAllProducts)
router.post('/data/products', productController.getProductById)
router.get('/data/products/:name', productController.getProductByName)
router.get('/data/products/:stock', productController.getProductByStock)
router.get('/data/products/:buyPrice', productController.getProductByBuyPrice)
router.get('/data/products/:sellPrice', productController.getProductBySellPrice)
router.get('/data/products/:volume', productController.getProductByVolume)
router.get('/data/products/:weight', productController.getProductByWeight)
router.get('/data/products/:supplierId', productController.getProductBySupplierId)

router.get('/columns', (req, res) => res.json({columns: columns}))

module.exports = router