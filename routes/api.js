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
//TODO: @ACCESS :PUBLIC - WORKING
router.get("/", (req, res) => {
    // res.json({msg: "Connected to API"});
    DB_TODOS
        .find({})
        .then((users) => {
            res.json(users);
            DB_TODOS.save();
        })
        .catch(err => console.log("Error at /api", err));
});

//TODO: @ROUTE: /api/create
//TODO: @PURPOSE: create a new Todo
//TODO: @ACCESS :PUBLIC - WORKING
router.post('/', (req, res) => {

    /*
 * {
 *  task:String,
 * completed:boolean,
 * created:date(default)
 * }
*/

    const newTodo = {
        task: req.body.task,
        completed: true,
        created: Date.now()
    };
    DB_TODOS
        .create(newTodo)
        .then((Todo) => res.json(Todo))
        .catch(err => console.log(err));

});

//TODO: @ROUTE: /api/update
//TODO: @PURPOSE: create a new Todo
//TODO: @ACCESS :PUBLIC
router.post("/update", (req, res) => {});
//TODO: @ROUTE: /api/create
//TODO: @PURPOSE: create a new Todo
//TODO: @ACCESS :PUBLIC
router.post("/delete", (req, res) => {});

//TODO: @ROUTE: /api/clear
//TODO: @PURPOSE: clear all todos
//TODO: @ACCESS :PUBLIC - WORKING
router.post("/clear", (req, res) => {
    DB_TODOS
        .remove()
        .then(() => res.json({msg: "cleared all"}).catch(e => console.log(e)))
});

//TODO: export router
module.exports = router;