const pool = require('../database/dbConfig');
const { querysWithParams } = require('./querys');

const callDbGetFunction = async (res, query) => {
  try {
    console.log(query)
      const [rows, fields] = await pool.query(query);
      res.json({ data: rows });
  } catch (error) {
      res.json({ error: error.message})
  }
}

const callDbGetFunctionWithParams = async (res, query, req) => {
  try {
    queryWithParams = query + "'" + req.params.id + "'";
      const [rows, fields] = await pool.query(querysWithParams);
      res.json({ data: rows });
  } catch (error) {
      res.json({ error: error.message})
  }
}

module.exports = { callDbGetFunction, callDbGetFunctionWithParams }