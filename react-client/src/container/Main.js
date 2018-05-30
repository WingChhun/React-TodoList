import React, {Component} from 'react';
import "../sass/main.css";

//* Import components up here

//TODO: Main class, main components here
class Main extends Component
{

    /*
     * Create state, hold array called 'todos' will be populated with API data
     * quote - contains random quote from API
     * time - contains date using Date.now
     */
    state = {
        todos: [],
        quote: [],
        time: ""
    };

    //* Lifecycle Methods
    async componentDidMount()
    {
        //Connect to API
        const res = await fetch("/api")
        const todos = await res.json();

        this.setState({
            ...this.state,
            todos
        });

    }
    //* State functions *Render
    render()
    {
        return (
            <div className="main">
                <h1>Welcome to MERN - TODO</h1>
                {/*Header*/}
                {/*TodoInput*/}
                {/*TodoList*/}
                {/*Quote*/}
                {/*Footer*/}

            </div>

        );

    }
}

export default Main;