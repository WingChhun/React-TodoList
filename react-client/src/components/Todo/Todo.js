import React, {Component} from 'react';
import PropTypes from 'prop-types';

//TODO:
const Todo = ({todo}) => {

    return (
        <div className="todolist__item">
            <h3 className="todolist__task">{todo.task}</h3>
            <div className = "todolist__status--container">
            <a href="" className="todolist__done fa fa-2x fa-check"/>
            <a href="" className="todolist__delete fa fa-2x fa-times-circle"/>
            </div>
        </div>
    )
}

//* Test PropTypes
Todo.propTypes = {

    //Make sure object is in proptypes *Check shape of the object
    todo: PropTypes.object.isRequired,
    todo: PropTypes.shape({_id: PropTypes.string.isRequired, task: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired, created: PropTypes.string.isRequired, __v: PropTypes.number.isRequired})

};
export default Todo;