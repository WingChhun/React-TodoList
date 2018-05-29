const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO: Create a schema for todo post
//* Task : hold task as a string, required
//* completed: boolean for mark status
//* created : retrieve the date *
const TodoSchema = new Schema({

    task: {
        type: String,
        required: true
    },
    completed: {
        type:Boolean,
        required: true
    },
    created: {
        type: Date,
        Date: Date.now(),
        required:true
    }

});

//! - Export Schema as Todo
module.exports = Todo = mongoose.model("todos", TodoSchema);
