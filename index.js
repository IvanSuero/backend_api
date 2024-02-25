const express = require("express")
const app = express()

const dataRouter = require("./routes/data")
const columnsRouter = require("./routes/columns")

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/data", dataRouter)
app.use("/api/columns", columnsRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})