import React from 'react';
import { Login } from './Login';
import { connect } from 'react-redux';
import { Switch, Route, } from "react-router-dom";
import { FetchLogin } from '../actions/LoginActions';

export class App extends React.Component{

  componentDidMount(){
    this.props.FetchLogin();
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
          <Route exact path="/" component={Login}/>
        </Switch>
      </div>
    )
  }
}

const MapDispatchToProps = (dispatch) =>{
  return{
    FetchLogin: () =>{
      dispatch(FetchLogin());
    }
  };
}

App = connect(null,MapDispatchToProps)(App);