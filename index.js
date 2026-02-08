const express = require("express");

const app = express();

app.listen(3000, (req, res) => {
    console.log("Server running on Port 3000")
});

app.get("/", (req, res) => {

    res.send("Hello from Express API");
})