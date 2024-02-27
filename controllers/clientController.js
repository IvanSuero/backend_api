import { querys, querysWithParams } from '../database/querys'
import { callDbGetFunction, callDbGetFunctionWithParams } from '../database/dbCallFunction'

const clientController = {

    // client functions
    getAllClients(req, res) {
        callDbGetFunction(res, querys.getAllClients)
    },
    getClientById(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getClientById, req.params)
    },
    getClientByName(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getClientByName, req.params)
    },

    // client orders functions
    getAllOrders(req, res) {
        callDbGetFunction(res, querys.getAllClientsOrders)
    },
    getOrderById(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getAllClientsOrdersProducts, req.params)
    },
    getOrderByClientId(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getOrderByClientId, req.params)
    },
    getOrderByClientName(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getOrderByClientName, req.params)
    },
    getOrderByNProducts(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getClientOrderByNProducts, req.params)
    },
    getOrderByCost(req, res) {
        callDbGetFunctionWithParams(res, querysWithParams.getClientOrderByCost, req.params)
    }
}

module.exports = clientController