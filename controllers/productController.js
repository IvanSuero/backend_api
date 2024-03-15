import { querys, querysWithParams } from '../database/querys'
import { callDbGetFunction, callDbGetFunctionWithParams } from '../database/dbCallFunction'

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.getAllProducts)
    },
    getProductById(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getProductById, req.body.id)
    }
}

module.exports = productController;