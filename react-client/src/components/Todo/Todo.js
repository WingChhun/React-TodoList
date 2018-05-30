import React, {Component} from 'react';
import PropTypes from 'prop-types';

//TODO:
const Todo = ({todo}) => {

    return (
        <div className="todo__item">
            <h1>{todo.task}</h1>
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