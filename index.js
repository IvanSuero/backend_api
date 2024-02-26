const express = require("express")
const app = express()

const router = require("./router/data.router")

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api", router)

//when hitting any other route, redirect to /data/products
router.get('*', (req, res) => {
    res.redirect('/data/products')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})