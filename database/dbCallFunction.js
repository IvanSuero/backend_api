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

const callDbGetFunctionWithParams = async (res, query, params) => {
  try {    
      const [rows, fields] = await pool.query(querysWithParams[query] + "'" + params + "'")
      res.json({ data: rows, value: params});
  } catch (error) {
      res.json({ error: error.message })
  }
}

module.exports = { callDbGetFunction, callDbGetFunctionWithParams }