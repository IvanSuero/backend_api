const pool = require('../database/dbConfig')
const querys = require('../database/querys')

const productsController = {
    async getAll(req, res) {
        await dbFunction(querys.getAllProducts, res)
    }
}

const dbFunction = (query, res) => {
    try {
        const [rows, fields] = pool.query(query);
        res.json({ products: rows });
    } catch (error) {
        res.json({ error: error.message})
    }
}

module.exports = productsController;