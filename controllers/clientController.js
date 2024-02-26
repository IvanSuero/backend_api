const pool = require('../database/dbConfig')
const querys = require('../database/querys')

const clientController = {
    async getAllClients(req, res) {
        try {
            const [rows, fields] = await pool.query(querys.getAllClients);
            res.json({ data: rows });
        } catch (error) {
            res.json({ error: error.message})
        }
    },
    async getAllOrders(req, res) {
        try {
            const [rows, fields] = await pool.query(querys.getAllClientsOrders);
            res.json({ data: rows });
        } catch (error) {
            res.json({ error: error.message})
        }
    }
}

module.exports = clientController