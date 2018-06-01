import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {resolve} from 'url';
//TODO:
class Todo extends Component {
    /*
 * Todo has completed , task, and date

*/
    constructor(props)
    {
        super(props)
        this._updateTodo = this.props._updateTodo;
    }
    //TODO: Make request to /api/completed/:id to check completed
    componentDidMount()
    {
        const {todo, updateSingleTodo, index, updateTodos} = this.props;
        this._updateCompleted = () => {
            console.log("updateCompleted");

            fetch(`/api/completed/${todo._id}`, {

                method: "POST",
                body: {
                    task: JSON.stringify(todo.task),
                    created: JSON.stringify(todo.created),
                    completed: JSON.stringify(todo.completed)
                }

            }).then(res => {
                //*Do nothing with res, call this._retrievesingle
                this._retrieveSingle();

            }).catch(e => console.log(e));
            //*Final step, update this.state.todos
        }
        //TODO: Make request to /api/delete/:id to delete task
        this._deleteTodo = () => {
            console.log('this._deleteTodo')
            this._deleteSingle();
        }

        this._deleteSingle = () => {
            fetch(`/api/delete/${todo._id}`, {method: "POST"})
                .then(res => res.json())
                .then(todo => {

                    //*todo contains nothing, need to trigger a re-render
                    this._getTodosAgain();
                })
                .catch(e => console.log(e));
        }
        this._getTodosAgain = () => {

            fetch("/api")
                .then(res => res.json())
                .then(todos => updateTodos(todos))
                .catch(e => console.log(e));

        }
        //TODO: retrieve single and deleteSingle
        this._retrieveSingle = () => {
            //*Final step, update this.state.todos
            fetch(`/api/${todo._id}`, {method: "GET"})
                .then(todo => todo.json())
                .then(todo => {
                    updateSingleTodo(todo, index);

                })
                .catch(e => console.log(e));
        }
    }
    render()
    {

        const {todo, updateTodo} = this.props;
        return (
            <div className="todolist__item">
                {(todo.completed && <Completed className="todolist__task">{todo.task}</Completed>)}
                {(!todo.completed && <h3 className="todolist__task">{todo.task}</h3>)}
                <div className="todolist__status--container">
                    <a
                        className="todolist__done fa fa-2x fa-check"
                        onClick
                        ={this._updateCompleted}/>
                    <a
                        className="todolist__delete fa fa-2x fa-times-circle"
                        onClick
                        ={this._deleteTodo}/>
                </div>
            </div>
        )
    }
}
//* Test PropTypes
Todo.propTypes = {

    //Make sure object is in proptypes *Check shape of the object
    todo: PropTypes.object.isRequired,
    todo: PropTypes.shape({_id: PropTypes.string.isRequired, task: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired, created: PropTypes.string.isRequired, __v: PropTypes.number.isRequired}),
    updateSingleTodo: PropTypes.func.isRequired
};
export default Todo;

//TODO: Styled COmponent Wrapper

//* Styled component to add linethrough
export const Completed = styled.h3 `
text-decoration:line-through;

`;