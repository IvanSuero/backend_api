const querys = require('../database/querys')
const callDbFunction = require('../database/dbCallFunction')

const supplierController = {
    getAllSuppliers(req, res) {
        callDbFunction(res, querys.getAllSuppliers)
    },
    getAllOrders(req, res) {
        callDbFunction(res, querys.getAllSuppliersOrders)
    }
}

module.exports = supplierController