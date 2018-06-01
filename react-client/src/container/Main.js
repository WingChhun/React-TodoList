import React, {Component} from 'react';
import styled from "styled-components";
import "../sass/main.css";

//* Import components up here
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import TodoList from "../components/Todo/TodoList";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

//TODO: Main class, main components here
import evening from "../img/evening.jpg";
import afternoon from "../img/afternoon.jpg";
import morning from "../img/morning.jpg";

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
        seconds: 0,
        hours: 0,
        minutes: 0,
        morning: false,
        afternoon: false,
        evening: false,
        backgroundImg: ""
    };

    //* Lifecycle Methods
    //* ComponentWillMount -> run updateTime
    async componentWillMount()
    {
        this._updateTime();
        //*If Midnight, clear the database
        if (this.state.hours === 24 && this.state.minutes === 0 && this.state.seconds === 0) {

            //TODO: make request to "/api/clear" clear todos
            const res = await fetch("/api/clear", {method: "POST"});
            const complete = await res.json();
            //*if made request, clear todos
            if (complete) {
                this.setState({
                    ...this.state,
                    todos: []
                });
            }

        }

    }
    async componentDidMount()
    {
        // Connect to API const res = await fetch("/api") const todos = await
        // res.json(); this.setState({     ...this.state,
        const {hours, minutes} = this.state;
        let status = 0;
        //* setInterval on window to change time
        window.setInterval(() => {
            this._updateTime();
            this._getSeconds();
        }, 1000);
        //*Set morning, evneing, img, and bakcgroundImg
        if (hours > 4 && hours < 12) {
            status = 1;
        } else if (hours >= 12 && hours < 18) {
            //*afternoon
            status = 2;
        } else { //*evening
            status = 3;
        }
        this._updateBackground(status);

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
            <Background className="main">
                <Header Time={this.state.time}/> {/*TodoInput*/}
                {/*TodoInput*/}
                <InputBox _updateTodos ={this._updateTodos}/>
                <TodoList
                    todos={this.state.todos}
                    updateTodos={this._updateTodos}
                    updateSingleTodo
                    ={this._updateSingleTodo}/> {/*Quote*/}
                <Quote
                    content={this.state.quote.content}
                    _updateQuote
                    ={this._updateQuote}
                    quote={this.state.quote}/>
                <Footer/>

            </Background>

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
        //* Prepend a 0 to Minutes if Single digit
        Hours = (Hours > 12
            ? Hours - 12
            : Hours);
        Minutes = (Minutes < 10
            ? `0${Minutes}`
            : Minutes);
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
        const minutes = event.getMinutes();
        const hours = event.getHours();
        //* updateSeconds
        this.setState({
            ...this.state,
            seconds,
            minutes,
            hours
        });
    }
    //TODO: Function to update this.state.quote
    _updateQuote = (quote) => {
        this.setState({
            ...this.state,
            quote
        });
        //*Debug console.log("Success, this.state.quote", this.state.quote);
    };
    //TODO: updateSingleTodo
    //* update an occurence of todos in state
    _updateSingleTodo = (todo, index) => {
        let newTodos = [...this.state.todos];
        newTodos[index] = todo;
        this.setState({
            ...this.state,
            todos: newTodos
        });
        console.log("Success update single todo")
        console.log(`this.state.todos[${index}] = `, this.state.todos[index]);
    }

    /*
     TODO: Functions that involve changing CSS,
     TODO: change Background image depending on time
    */
    //* Change image depending on this.state.hours
    _updateBackground = (status) => {

        const morningImg = "https://images.unsplash.com/photo-1503038324980-f38756a54c7d?ixlib=rb-0.3.5&ixid" +
                "=eyJhcHBfaWQiOjEyMDd9&s=a8fefc558d1d35dc670dafed1b02c537&auto=format&fit=crop&w=" +
                "1350&q=80";
        const afternoonImg = "https://images.unsplash.com/photo-1516893623281-98535aaa2205?ixlib=rb-0.3.5&ixid" +
                "=eyJhcHBfaWQiOjEyMDd9&s=f38c904c2615659c0bf62b3e18457b5a&auto=format&fit=crop&w=" +
                "1350&q=80";
        const eveningImg = "https://images.unsplash.com/photo-1515780010305-0d4bbd149cda?ixlib=rb-0.3.5&ixid" +
                "=eyJhcHBfaWQiOjEyMDd9&s=290520babcf3a21315f4bf2899dc044f&auto=format&fit=crop&w=" +
                "1350&q=80";
        let backgroundImg = "";
        //*Logic change state change image
        switch (status) {
            case 1:
                backgroundImg = morningImg;
                break;
            case 2:
                backgroundImg = afternoonImg;
                break;
            case 3:
                backgroundImg = eveningImg;
                break;
            default:
                break;
        }
        //*set image
        this.setState({
            ...this.state,
            backgroundImg
        });
    }

}

export default Main;
//*styled component *backgroundImg
//*chose background image

export const Background = styled.div `
  background: url(${afternoon}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  max-height:90%;
`;
console.log(Background);