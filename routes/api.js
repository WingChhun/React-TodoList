const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

//* install npm package random-quote
const randomQuote = require('random-quote');
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
 * completed:boolean, - set to false initially
 * created:date(default)
 * }
*/

    const newTodo = {
        task: req.body.task,
        completed: false,
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
router.post("/update/:id", (req, res) => {

    //* Req.body._id is mongodb unique id
    //* Update the found todo
    //* mainly change the date and task, completed should be passed over

    const todoID = req.params.id;
    const newTodo = {
        task: req.body.task,
        completed: false,
        created: Date.now()
    }
    DB_TODOS
        .findByIdAndUpdate(req.params.id, newTodo)
        .then(model => res.json(model))
        .catch(e => console.log("Could not find todo", e));
});
//TODO: @ROUTE: /api/create
//TODO: @PURPOSE: create a new Todo
//TODO: @ACCESS :PUBLIC
router.post("/delete/:id", (req, res) => {

    const todoID = req.params.id;
    DB_TODOS
        .findByIdAndRemove(todoID)
        .then(success => res.json({msg: "success deleted"}))
        .catch(e => console.log(e));

});

//TODO: @ROUTE: /api/clear
//TODO: @PURPOSE: clear all todos
//TODO: @ACCESS :PUBLIC - WORKING
router.post("/clear", (req, res) => {
    DB_TODOS
        .remove()
        .then(() => res.json({msg: "cleared all"}).catch(e => console.log(e)))
});

//TODO: @ROUTE: /api/quote
//TODO: @PURPOSE: get quote using package - random-Quote
//TODO: @ACCESS :PUBLIC - WORKING

router.get("/quote", (req, res) => {
    randomQuote()
        .then(quote => res.json(quote))
        .catch(e => console.log(e));
});

//TODO: @Route /api/completed
//TODO: @PURPOSE: Change the status of completed
router.post("/completed/:id", (req, res) => {
    const todoID = req.params.id;
    const task = req.body.task;
    const created = req.body.created;

    const completed = req.body.completed;
    const newTodo = {
        task,
        created,
        completed: !completed
    };
    //*Find todoID then update
    DB_TODOS
        .findById(todoID)
        .then(todo => {
            todo.completed = !todo.completed;
            todo.save((err, todo) => {

                if (err) {
                    console.log(err);
                } else {
                    console.log("successs");
                    //*redirect to be able to retrieve the todo
                    res.json(todo);
                }

            });

        })
        .catch(e => console.log(e));

}); //! end completed
//TODO: new route, show route, to retrieve a single todo
//* Intention to be used alongside update route
router.get("/:id", (req, res) => {
    console.log("req.pasrams.id", req.params.id);
    DB_TODOS.findOne({
        _id: req.params.id
    }, (err, todo) => {
        if (err) {
            console.log(err);
        }
       
        res.json(todo);
    })
});

//TODO: export router
module.exports = router;