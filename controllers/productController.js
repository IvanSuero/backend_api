import { querys } from '../database/querys'
import { callDbGetFunction, callDbGetFunctionWithParams } from '../database/dbCallFunction'

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.querys.getAllProducts)
    },
    getProductById(req, res) {
        console-log(req.params.id)
        callDbGetFunctionWithParams(res, querys.querys.getProductById, req.params.id)
    },
}

module.exports = productController;