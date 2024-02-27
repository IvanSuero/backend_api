import { querys, querysWithParams } from '../database/querys'
const callDbGetFunction = require('../database/dbCallFunction')

const supplierController = {

    // supplier functions
    getAllSuppliers(req, res) {
        callDbGetFunction(res, querys.getAllSuppliers)
    },
    getSupplierById(req, res) {
        callDbGetFunction(res, querysWithParams.getSupplierById, req.params)
    },
    getSupplierByName(req, res) {
        callDbGetFunction(res, querysWithParams.getSupplierByName, req.params)
    },

    // supplier orders functions
    getAllOrders(req, res) {
        callDbGetFunction(res, querys.getAllSuppliersOrders)
    },
    getOrderBySupplierId(req, res) {
        callDbGetFunction(res, querysWithParams.getOrderBySupplierId, req.params)
    },
    getOrderBySupplierName(req, res) {
        callDbGetFunction(res, querysWithParams.getOrderBySupplierName, req.params)
    },
    getOrderByNProducts(req, res) {
        callDbGetFunction(res, querysWithParams.getSupplierOrderByNProducts, req.params)
    },
    getOrderByCost(req, res) {
        callDbGetFunction(res, querysWithParams.getSupplierOrderByCost, req.params)
    }
}

module.exports = supplierController