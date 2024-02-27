const querys = require('../database/querys')
const callDbGetFunction = require('../database/dbCallFunction')

const productController = {
    getAllProducts(req, res) {
        console.log(querys.getAllProducts)
        callDbGetFunction(res, querys.getAllProducts)
    }
}

module.exports = productController;