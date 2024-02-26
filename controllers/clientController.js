const querys = require('../database/querys')
const callDbGetFunction = require('../database/dbCallFunction')

const clientController = {
    getAllClients(req, res) {
        callDbFunction(res, querys.getAllClients)
    },
    getAllOrders(req, res) {
        callDbFunction(res, querys.getAllClientsOrders)
    }
}

module.exports = clientController