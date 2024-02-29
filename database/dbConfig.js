const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'bo3wmlubp3rmsxdju1rs-mysql.services.clever-cloud.com', 
    user: process.env.DB_USERNAME || 'uzmnqjvc1qei9zjk', 
    password: process.env.DB_PASSWORD || 'iuVusIAL6h6jq417LvyE',
    database: process.env.DB_DBNAME || 'bo3wmlubp3rmsxdju1rs',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool.promise()