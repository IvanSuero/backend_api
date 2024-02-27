import { querys, querysWithParams } from '../database/querys'
import { callDbGetFunction, callDbGetFunctionWithParams } from '../database/dbCallFunction'

const supplierController = {

    // supplier functions
    getAllSuppliers(req, res) {
        callDbGetFunction(res, querys.getAllSuppliers)
    },
    getSupplierById(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getSupplierById, req.params)
    },
    getSupplierByName(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getSupplierByName, req.params)
    },

    // supplier orders functions
    getAllOrders(req, res) {
        callDbGetFunction(res, querys.getAllSuppliersOrders)
    },
    getOrderBySupplierId(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getOrderBySupplierId, req.params)
    },
    getOrderBySupplierName(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getOrderBySupplierName, req.params)
    },
    getOrderByNProducts(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getSupplierOrderByNProducts, req.params)
    },
    getOrderByCost(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getSupplierOrderByCost, req.params)
    }
}

module.exports = supplierController