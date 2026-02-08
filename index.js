const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
app.use(express.json())

const Product = require("./models/product.model")

app.get("/", (req, res) => {

    res.send("Hello from Express API");
})

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        console.log(`Error due to : ${error}  `);
    }
})


app.get("/api/product/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        console.log(product);
        res.status(200).json(product);
    }
    catch (error) {
        console.log(`Error due to : ${error}  `);
    }
})

app.put("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        console.log(`product ::: ${product}`)
        if (!product) {
            res.status(400).json("Product id is not found");
        }
        const updatedProduct = await Product.findById(id);
        console.log(updatedProduct);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        console.log(`Error due to : ${error}  `);
    }
})


app.delete("/api/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        console.log(`product ::: ${product}`)
        if (!product) {
            res.status(400).json("Product is not found");
        }

        console.log(product);
        res.status(200).json("Product is deleted successfully");
    }
    catch (error) {
        console.log(`Error due to : ${error}  `);
    }
})


app.post("/api/products", async (req, res) => {

    try {
        const product = await Product.create(req.body);

        console.log(product);
        res.status(200).json(product);
    }
    catch (error) {
        console.log(`Error due to : ${error}`)
    }

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