import { querys, querysWithParams } from '../database/querys'
const callDbGetFunction = require('../database/dbCallFunction')

const clientController = {

    // client functions
    getAllClients(req, res) {
        callDbGetFunction(res, querys.getAllClients)
    },
    getClientById(req, res) {
        callDbGetFunction(res, querysWithParams.getClientById, req.params)
    },
    getClientByName(req, res) {
        callDbGetFunction(res, querysWithParams.getClientByName, req.params)
    },

    // client orders functions
    getAllOrders(req, res) {
        callDbGetFunction(res, querys.getAllClientsOrders)
    },
    getOrderById(req, res) {
        callDbGetFunction(res, querysWithParams.getAllClientsOrdersProducts, req.params)
    },
    getOrderByClientId(req, res) {
        callDbGetFunction(res, querysWithParams.getOrderByClientId, req.params)
    },
    getOrderByClientName(req, res) {
        callDbGetFunction(res, querysWithParams.getOrderByClientName, req.params)
    },
    getOrderByNProducts(req, res) {
        callDbGetFunction(res, querysWithParams.getClientOrderByNProducts, req.params)
    },
    getOrderByCost(req, res) {
        callDbGetFunction(res, querysWithParams.getClientOrderByCost, req.params)
    }
}

module.exports = clientController