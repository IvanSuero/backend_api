const pool = require('../database/dbConfig');

const productsController = {
    async getAll(req, res) {
        try {
            const products = await pool.query("SELECT * FROM products");
            res.json({ products: products });
        } catch (error) {
            console.error(error.message)
            res.json({ error: error.message})
        }
    }
}

module.exports = productsController;