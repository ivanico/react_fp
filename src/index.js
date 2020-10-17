import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./assets/css/style.css";


import { App } from './components/App';

import store from "./store";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={ App } />
            <Route path="/register" component={ App } />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
