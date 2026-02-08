const express = require("express");

const router = express.Router();
const { getProduct, getProducts, postProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");


router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.post("/", postProduct);

module.exports = router;
