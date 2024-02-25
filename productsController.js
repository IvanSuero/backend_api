const pool = require('./db');
const productsController = {
    async getAll(req, res) {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM products");
            res.json({ products: rows });
        } catch (error) {
            console.error(error.message)
            res.json({ error: error.message})
        }
    }
}

module.exports = productsController;