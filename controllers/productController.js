const pool = require('../database/dbConfig')
const querys = require('../database/querys')

const productsController = {
    async getAll(req, res) {
        try {
            const [rows, fields] = await pool.query(querys.getAllProducts);
            res.json({ products: rows });
        } catch (error) {
            res.json({ error: error.message})
        }
    }
}

module.exports = productsController;