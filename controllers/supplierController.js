const pool = require('../database/dbConfig')
const querys = require('../database/querys')

const supplierController = {
    async getAllSuppliers(req, res) {
        try {
            const [rows, fields] = await pool.query(querys.getAllSuppliers);
            res.json({ data: rows });
        } catch (error) {
            res.json({ error: error.message})
        }
    },
    async getAllOrders(req, res) {
        try {
            const [rows, fields] = await pool.query(querys.getAllSuppliersOrders);
            res.json({ data: rows });
        } catch (error) {
            res.json({ error: error.message})
        }
    }
}

module.exports = supplierController