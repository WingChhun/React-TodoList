const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 5000 || process.env.PORT; // * Port to listen on
const keys = require("./config/keys");

//* Import Routes
const API = require("./routes/api.js");

//TODO: Mongoose Mongodb configuration
mongoose
    .connect(keys.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.log("Could not connect to MongoDB", err);
    });

//TODO: App COnfiguration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// TODO: Route configuration app.get("/", (req, res) => {     res.json({msg:
// "initial route"}); });

//* Use API Routes
app.use("/api", API);

//TODO: start server
app.listen(PORT, () => {
    console.log("Server has started on PORT = ", PORT);
});