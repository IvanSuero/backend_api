import { querys, querysWithParams } from '../database/querys'
const callDbGetFunction = require('../database/dbCallFunction')

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.getAllProducts)
    },
    getProductById(req, res) {
        callDbGetFunction(res, querysWithParams.getProductById, req.params)
    },
    getProductByName(req, res) {
        callDbGetFunction(res, querysWithParams.getProductByName, req.params)
    },
    getProductByStock(req, res) {
        callDbGetFunction(res, querysWithParams.getProductByStock, req.params)
    },
    getProductByBuyPrice(req, res) {
        callDbGetFunction(res, querysWithParams.getProductByBuyPrice, req.params)
    },
    getProductBySellPrice(req, res) {
        callDbGetFunction(res, querysWithParams.getProductBySellPrice, req.params)
    },
    getProductByVolume(req, res) {
        callDbGetFunction(res, querysWithParams.getProductByVolume, req.params)
    },
    getProductByWeight(req, res) {
        callDbGetFunction(res, querysWithParams.getProductByWeight, req.params)
    },
    getProductBySupplierId(req, res) {
        callDbGetFunction(res, querysWithParams.getProductBySupplierId, req.params)
    }
}

module.exports = productController;