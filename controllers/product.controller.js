const Product = require("../models/product.model");


const getProducts =
    async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        }
        catch (error) {
            console.log(`Error due to : ${error}  `);
        }
    }

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        console.log(product);
        res.status(200).json(product);
    }
    catch (error) {
        console.log(`Error due to : ${error}  `);
    }
}

const postProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);

        console.log(product);
        res.status(200).json(product);
    }
    catch (error) {
        console.log(`Error due to : ${error}`)
    }

}

const updateProduct = async (req, res) => {
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
}

const deleteProduct = async (req, res) => {
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
}

module.exports = { getProduct, getProducts, postProduct, updateProduct, deleteProduct };