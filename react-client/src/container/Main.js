import React, {Component} from 'react';
import "../sass/main.css";

//* Import components up here
import Header from "../components/Header";
import TodoList from "../components/Todo/TodoList";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
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
        quote: {},
        time: "XX:XX AM",
        seconds: 0
    };

    //* Lifecycle Methods
    //* ComponentWillMount -> run updateTime
    componentWillMount()
    {
        this._updateTime();
    }
    async componentDidMount()
    {
        // Connect to API const res = await fetch("/api") const todos = await
        // res.json(); this.setState({     ...this.state,

        //* setInterval on window to change time
        window.setInterval(() => {
            this._updateTime();
            this._getSeconds();
        }, 1000);
    }

    _updateTodos = (todos) => {
        this.setState({
            ...this.state,
            todos
        });
    }
    //* API Function
    //* State functions *Render
    render()
    {
        const {_updateTime} = this._updateTime;
        return (
            <div className="main">
                <Header Time={this.state.time}/> {/*TodoInput*/}
                {/*TodoInput*/}
                <TodoList todos={this.state.todos} updateTodos={this._updateTodos}/> {/*Quote*/}
                <Quote content = {this.state.quote.content} _updateQuote ={this._updateQuote} quote={this.state.quote}/>
                <Footer/>

            </div>

        );

    } //! End Render

    //* Extra functions to be passed as props

    /*
      TODO: function updateTime,
      TODO: Gets Time, return as string,
      TODO: Should be called everytime Seconds is = 60, update,
     */
    _updateTime = () => {
        //*new instance of time
        const event = new Date();

        let Hours = event.getHours();
        let Minutes = event.getMinutes();
        let Seconds = event.getSeconds();
        let AM_PM = (Hours < 12
            ? 'AM'
            : 'PM');
        //* Change Hours depending on the time
        Hours = (Hours > 12
            ? Hours - 12
            : Hours);
        //* Make final time as a string
        let time = `${Hours}:${Minutes}:${AM_PM}`;
        this.setState({
            ...this.state,
            time
        });

    }
    //TODO: Function to getSeconds and setState
    _getSeconds = () => {
        const event = new Date();
        const seconds = event.getSeconds();
        //* updateSeconds
        this.setState({
            ...this.state,
            seconds
        });
    }
    //TODO: Function to update this.state.quote
    _updateQuote = (quote) => {
        this.setState({
            ...this.state,
            quote
        });
        console.log("Success, this.state.quote", this.state.quote);
    };
}

export default Main;