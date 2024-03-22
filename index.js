const express = require("express")
const app = express()


const router = require("./router/data.router")

const cors = require("cors")
const corsOptions = {
    origin: "http://localhost:9000"
}
app.use(cors(corsOptions))

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api", router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})

module.exports = app