const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})