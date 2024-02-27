import { querys, querysWithParams } from '../database/querys'
import { callDbGetFunction, callDbGetFunctionWithParams } from '../database/dbCallFunction'

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.getAllProducts)
    },
    getProductById(req, res) {
        console.log(req)
        callDbGetFunctionWithParams(res, querysWithParams.getProductById, req.params)
    },
    getProductByName(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductByName, req.params)
    },
    getProductByStock(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductByStock, req.params)
    },
    getProductByBuyPrice(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductByBuyPrice, req.params)
    },
    getProductBySellPrice(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductBySellPrice, req.params)
    },
    getProductByVolume(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductByVolume, req.params)
    },
    getProductByWeight(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductByWeight, req.params)
    },
    getProductBySupplierId(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductBySupplierId, req.params)
    }
}

module.exports = productController;