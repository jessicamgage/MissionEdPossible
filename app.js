const express = require('express');
const restify = require('express-restify-mongoose');
const clientModel = require("./models/Clients");
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
app.use(bodyParser.json({limit: "10gb"}));
app.use(express.json());

//Middleware

app.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, 
        { useNewUrlParser: true, useUnifiedTopology: true } 
    );
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
    restify.serve(router, clientModel);
    app.use(router);

    console.log(`server started on port ${config.PORT}`);
});

module.exports = app;