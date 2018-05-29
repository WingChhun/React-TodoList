const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

//* import mongodb model for todos
const DB_TODOS = require("../models/todo.js");

// * Schema for DB_TODOS
/*
task:String,
completed:boolean,
created:Date (created by itself)
*/

//Todo: @ROUTE /api
//TODO: @PURPOSE: send all users, for now send test
//TODO: @ACCESS :PUBLIC
router.get("/", (req, res) => {
    res.json({msg: "Connected to API"});
});

//TODO: @ROUTE: /api/create
//TODO: @PURPOSE: create a new Todo
//TODO: @ACCESS :PUBLIC
router.post('/create')

//TODO: export router
module.exports = router;