import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

//CSS
import "./sass/main.css";
//TODO: Import components
import Main from "./container/Main";
import Footer from "./components/Footer";
class Router extends Component {

    componentWillMount()
    {
        //Connect to API
        document.title = "MERN - Todo List";
    }
    render()
    {

        return (

            <BrowserRouter basename={process.env.PUBLIC_URL}>

                <Switch>

                    <Route exact path="/" component={Main}/>
                </Switch>

            </BrowserRouter>

        );
    }
}

export default Router;
