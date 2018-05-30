import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//* Import Font awesome
import "../node_modules/font-awesome/css/font-awesome.min.css";

//* import Router.js
import Router from "./Router.js";

ReactDOM.render(
    <Router/>, document.getElementById('root'));
registerServiceWorker();
