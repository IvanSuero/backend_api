const callDbFunction = require('../database/dbCallFunction')
const querys = require('../database/querys')

const transferController = {
    getAllTransfers(req, res) {
        callDbFunction(res, querys.getAllTransfers)
    }
}

module.exports = transferController