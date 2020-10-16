import React from 'react';
// import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

// import { LoginU } from '../actions/LoginActions';
// import { FetchProducts } from "../actions/ProductActions";

import { Product } from "./Product";
import Login  from './Login/Login';


export class App extends React.Component{



  render(){
    return(
      <div id="app">
        <div id="header">
          <div id="container">
            <div id="main-menu">
           </div>
          </div>
        </div>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="/product" component={Product}/>
          </Switch>
      </div>
    )
  }
}

