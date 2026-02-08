const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Product = require("./models/product.model")
const productRoute = require("./routes/product.route");
app.get("/", (req, res) => {

    res.send("Hello from Express API");
})
app.use(logger);
app.use("/api/products", productRoute);

function logger(req, res, next) {
    console.log("Logger function is called in this method");
    next();
}
mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(3000, (req, res) => {
            console.log(`Server running on Port ${PORT}`)
        });
        console.log("DB connected")
    })
    .catch(() => {
        console.log("Error to connect to DB")
    })