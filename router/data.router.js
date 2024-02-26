const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")
const clientController = require("../controllers/clientController")
const supplierController = require("../controllers/supplierController")
const transferController = require("../controllers/transferController")

router.get('/data/clientsList', clientController.getAllClients)

router.get('/data/clientsOrders', clientController.getAllOrders)

router.get('/data/suppliersList', supplierController.getAllSuppliers)

router.get('/data/suppliersOrders', supplierController.getAllOrders)

router.get('/data/products', productController.getAllProducts)

router.get('/data/transfers', transferController.getAllTransfers)

module.exports = router