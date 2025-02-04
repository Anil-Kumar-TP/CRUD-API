const express = require('express');
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route');
const app = express();

app.use(express.json()) //via json
app.use(express.urlencoded({ extended: false })); //via form-encode

app.use('/api/products',productRoute) // for routes

app.get('/', (req, res) => {
    res.send("Hello from server")
})

mongoose.connect("mongodb+srv://anil6996f:bACdvIX2nzgPjsgb@backenddb.muggcss.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log("Connected to database")
    app.listen(5000, () => {
    console.log("Server running on port 5000");
    })

   
}).catch(() => {
    console.log("Connection Failed");
});


