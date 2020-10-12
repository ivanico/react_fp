import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import { FetchLogin } from '../actions/LoginActions';
import { FetchProducts } from "../actions/ProductActions";

import { Product } from "./Product";
import { Login } from './Login/Login';


export class App extends React.Component{

  componentDidMount(){
    this.props.FetchLogin();
    this.props.FetchProducts();
  }

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

const MapDispatchToProps = (dispatch) =>{
  return{
    FetchLogin: () =>{
      dispatch(FetchLogin());
    },
    FetchProducts: () =>{
      dispatch(FetchProducts());
    }
  };
}

App = connect(null, MapDispatchToProps)(App);