const express = require("express")
const app = express()

const router = require("./router/data.router")
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: 'Data API',
            description: 'Data API Information',
            contact: {
                name: 'Amazing Developer'
            },
            servers: ["https://backend-api-seven-rho.vercel.app"]
        }
    },
    basePath: "/",
    apis: ["./router/data.router.js"]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
//app.use("/api", router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})