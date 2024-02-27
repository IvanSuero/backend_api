const express = require("express")
const app = express()

const router = require("./router/data.router")
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api", router)

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Swagger API",
        version: "1.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
      },
      servers: [
        {
          url: "https://backend-api-seven-rho.vercel.app/",
        },
      ],
    },
    apis: ["src/**/*.js"],
}

const specs = swaggerJsdoc(options);
const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { customCss: CSS_URL })
);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})