const querys = require('../database/querys')
const callDbGetFunction = require('../database/dbCallFunction')

const clientController = {
    getAllClients(req, res) {
        callDbGetFunction(res, querys.getAllClients)
    },
    getAllOrders(req, res) {
        callDbGetFunction(res, querys.getAllClientsOrders)
    }
}

module.exports = clientController