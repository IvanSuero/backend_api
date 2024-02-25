import { SpeedInsights } from "@vercel/speed-insights/next"

const express = require("express")
const app = express()

const productsController = require("./productsController")

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/products", productsController.getAll)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})