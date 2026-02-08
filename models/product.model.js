const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"]
        },

        quantity: {
            type: {
                type: Number,
                required: true,
                default: 0
            }
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: true,

        }


    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;