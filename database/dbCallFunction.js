const pool = require('../database/dbConfig');

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
      const [rows, fields] = await pool.query(query, [params.reference]);
      console.log({ data: rows, key: key, value: params[key]})
      res.json({ data: rows, key: key, value: params[key]});
  } catch (error) {
      res.json({ error: error.message })
  }
}

module.exports = { callDbGetFunction, callDbGetFunctionWithParams }