import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Product } from "./Product";
import Login  from './Login/Login';
import Register from './Register';


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
            <Route path="/register" component={Register}/>
          </Switch>
      </div>
    )
  }
}

