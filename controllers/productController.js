const querys = require('../database/querys')
const callDbGetFunction = require('../database/dbCallFunction')

const productController = {
    getAllProducts(req, res) {
        callDbFunction(res, querys.getAllProducts)
    }
}

module.exports = productController;