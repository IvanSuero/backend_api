const express = require("express")
const app = express()

const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

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