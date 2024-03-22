import { querys, querysWithParams } from '../database/querys'
import { callDbGetFunction, callInsertFunction } from '../database/dbCallFunction'

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.getAllProducts)
    },
    addProduct(req, res) {
        callInsertFunction(res, querysWithParams.addProduct, req.body)
    },
}

module.exports = productController;