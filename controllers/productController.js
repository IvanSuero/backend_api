const pool = require('../database/dbConfig')
const querys = require('../database/querys')
const callDbFunction = require('../database/dbCallFunction')

const productController = {
    getAllProducts(req, res) {
        callDbFunction(res, querys.getAllProducts)
    }
}

module.exports = productController;