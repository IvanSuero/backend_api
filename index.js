const express = require("express")
const app = express()

const router = require("./router/data.router")
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/api", router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})