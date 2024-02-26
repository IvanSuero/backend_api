const pool = require('../database/dbConfig')
const querys = require('../database/querys')

const transferController = {
    async getAllTransfers(req, res) {
        try {
            const [rows, fields] = await pool.query(querys.getAllTransfers);
            res.json({ data: rows });
        } catch (error) {
            res.json({ error: error.message})
        }
    }
}

module.exports = transferController