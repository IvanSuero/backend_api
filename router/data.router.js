const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")
const clientController = require("../controllers/clientController")
const supplierController = require("../controllers/supplierController")

router.get('/docs', require('./swagger'))

router.get('/data/clientsList', clientController.getAllClients)
router.get('/data/clientsList/:id', clientController.getClientById)
router.get('/data/clientsList/:name', clientController.getClientByName)

router.get('/data/clientsOrders', clientController.getAllOrders)
router.get('/data/clientsOrders/:id', clientController.getOrderById)
router.get('/data/clientsOrders/:clientId', clientController.getOrderByClientId)
router.get('/data/clientsOrders/:clientName', clientController.getOrderByClientName)
router.get('/data/clientsOrders/:nProducts', clientController.getOrderByNProducts)
router.get('/data/clientsOrders/:cost', clientController.getOrderByCost)

router.get('/data/suppliersList', supplierController.getAllSuppliers)
router.get('/data/suppliersList/:id', supplierController.getSupplierById)
router.get('/data/suppliersList/:name', supplierController.getSupplierByName)

router.get('/data/suppliersOrders', supplierController.getAllOrders)
router.get('/data/suppliersOrders/:id', supplierController.getOrderBySupplierId)
router.get('/data/suppliersOrders/:name', supplierController.getOrderBySupplierName)
router.get('/data/suppliersOrders/:nProducts', supplierController.getOrderByNProducts)
router.get('/data/suppliersOrders/:cost', supplierController.getOrderByCost)

router.get('/data/products', productController.getAllProducts)
router.get('/data/products/:id', productController.getProductById)
router.get('/data/products/:name', productController.getProductByName)
router.get('/data/products/:stock', productController.getProductByStock)
router.get('/data/products/:buyPrice', productController.getProductByBuyPrice)
router.get('/data/products/:sellPrice', productController.getProductBySellPrice)
router.get('/data/products/:volume', productController.getProductByVolume)
router.get('/data/products/:weight', productController.getProductByWeight)
router.get('/data/products/:supplierId', productController.getProductBySupplierId)

module.exports = router