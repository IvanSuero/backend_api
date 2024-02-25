const express = require("express")
const dataRouter = express.Router()

const productController = require("../controllers/productController")

dataRouter.get("/products", productController.getAll)

module.exports = dataRouter