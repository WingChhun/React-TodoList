import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//* import Router.js
import Router from "./Router.js";

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
