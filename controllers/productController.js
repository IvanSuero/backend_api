const pool = require('../database/dbConfig');

const productsController = {
    async getAll(req, res) {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM products");
            res.json({ products: rows, fields: fields});
        } catch (error) {
            console.error(error.message)
            res.json({ error: error.message})
        }
    }
}

module.exports = productsController;