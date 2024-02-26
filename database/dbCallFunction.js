const callDbFunction = async (res, query) => {
  try {
      const [rows, fields] = await pool.query(query);
      res.json({ data: rows });
  } catch (error) {
      res.json({ error: error.message})
  }
}

module.exports = callDbFunction