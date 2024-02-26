const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")
/*const clientController = require("../controllers/clientController")
const supplierController = require("../controllers/supplierController")
const transferController = require("../controllers/transferController")

router.get('/data/clientsList', clientController.getAll)

router.get('/data/clientsOrders', clientController.getAll)

router.get('/data/suppliersList', supplierController.getAll)

router.get('/data/suppliersOrders', supplierController.getAll)*/

router.get('/data/products', productController.getAll)

//router.get('/data/transfers', transferController.getAll)

module.exports = router