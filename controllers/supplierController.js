const querys = require('../database/querys')
const callDbGetFunction = require('../database/dbCallFunction')

const supplierController = {
    getAllSuppliers(req, res) {
        callDbGetFunction(res, querys.getAllSuppliers)
    },
    getAllOrders(req, res) {
        callDbGetFunction(res, querys.getAllSuppliersOrders)
    }
}

module.exports = supplierController