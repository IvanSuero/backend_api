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
      openapi: "3.1.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
}

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})