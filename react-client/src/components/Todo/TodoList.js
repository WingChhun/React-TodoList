import React, {Component} from 'react';
import PropTypes from 'prop-types';

//* Import components
import Todo from "./Todo";
import InputBox from "../InputBox";
/*
 TODO: TodoList component
 TODO: Retrieve Todos from API
 TODO: Render using Todo Component, pass data as props
*/
class TodoList extends Component {

    constructor(props)
    {
        super(props);

    }
    /*
 TODO: Lifecycle Methods
 TODO: ComponentDidMount() => retrieve todos from backend, update state
    */
    async componentWillMount()
    {
        const {updateTodos} = this.props;
        //Connect to API
        const res = await fetch("/api");
        const todos = await res.json();

        updateTodos(todos);

    }
    //* LifeCycle Method, involve component re-rendering after props change
    componentDidUpdate()
    {}

    //* ComponentDidMount shoudl take care of Logic involved with updating database
    componentDidMount()
    {}

    render()
    {
        //* pull todos array from this.props
        const {todos} = this.props;
        return (

            <div className="todolist">
          
                <h1>TodoList</h1>
                {/* Map todos tasks*/}
                {todos.map((todo, index) => <Todo todo={todo} key={todo._id}/>)
}
            </div>

        ) //!end return
    } //!end retnder
}

//TODO: Proptype check
TodoList.propTypes = {
    updateTodos: PropTypes.func.isRequired

};
export default TodoList;