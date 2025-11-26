//Using Express framework to serve tasks from tasks.js
const express = require('express');
const mongoose = require('mongoose');
const proudctRoute = require('./routes/product.route.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Sending POST requests from forms URL encoded data
app.use("/api/products", proudctRoute);

// Connect to MongoDB and start the server

mongoose.connect('mongodb+srv://MONGO_DB_USER:PASSWORD@cluster0.r4ekyqx.mongodb.net/Node-API?appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});
