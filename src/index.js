import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import WikiApi from './WikiApi';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/home">Home of Characters</Link>
                </li>
                <li>
                    <Link to="/api">Api</Link>
                </li>
            </ul>
            <Route path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/api" component={WikiApi}/>
        </div>
    </Router>
);
ReactDOM.render(routing,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
