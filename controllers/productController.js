import { querys, querysWithParams } from '../database/querys'
const callDbGetFunction = require('../database/dbCallFunction')

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.getAllProducts)
    }
}

module.exports = productController;