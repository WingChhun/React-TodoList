import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputBox extends Component {

    constructor(props)
    {
        super(props);
        this._updateTodos = this.props._updateTodos;
    }

    _createTodo = (e) => {
        //* Prevent page refresh
        e.preventDefault();

        console.log(this.refs.task.value);
        let task = this.refs.task.value;
        console.log("JSON", JSON.stringify({task}));
        fetch("/api", {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({task})
        }).then(res => {
            //*if res.statusCode is 200, then new Todo request to update Todos
            fetch("/api")
                .then(res => res.json())
                .then(todos => this._updateTodos(todos))
                .catch(e => console.log(e));
        }).catch(e => console.log(e));

        //*Reset the field
        this.refs.task.value = null;
    } //! End createTodo

    render()
    {
        return (

            <form onSubmit={this._createTodo} action="POST" method="/api">
                <input
                    ref="task"
                    name="task"
                    type="text"
                    placeholder="Add a new task "
                    className="inputbox"/>
            </form>
        );
    } //! End Render } //!- end inputbox InputBox.propTypes = {};
}
InputBox.propTypes = {

    _updateTodos: PropTypes.func.isRequired
}
export default InputBox;