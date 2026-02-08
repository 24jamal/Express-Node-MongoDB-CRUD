const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;


app.get("/", (req, res) => {

    res.send("Hello from Express API");
})

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