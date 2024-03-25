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

const callInsertFunction = async (res, query, params) => {
  try {    
      console.log(query)
      const [rows, fields] = await pool.query(query, params);
      res.json({ data: rows});
  } catch (error) {
      res.json({ error: error.message })
  }
}

module.exports = { callDbGetFunction, callInsertFunction }