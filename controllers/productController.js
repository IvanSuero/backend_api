const pool = require('../database/dbConfig')
const querys = require('../database/querys')

const productController = {
    getAllProducts(req, res) {
        callDbFunction(res, querys.getAllProducts)
    }
}

const callDbFunction = async (res, query) => {
    try {
        const [rows, fields] = await pool.query(query);
        res.json({ data: rows });
    } catch (error) {
        res.json({ error: error.message})
    }
}

module.exports = productController;