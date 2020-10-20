import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Product } from "./Product";
import Login  from './Login/Login';
import Register from './Register';
import { Expenses } from './Expenses';
import { NewProduct } from './NewProduct';
import { EditProduct } from './EditProduct';



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
            <Route exact path="/" component={Login}/>
            <Route path="/product" component={Product}/>
            <Route path="/expenses" component={Expenses}/>
            <Route path="/register" component={Register}/>
            <Route path="/createproduct" component={NewProduct}/>
            <Route path="/editproduct/:id" component={EditProduct} />
          </Switch>
      </div>
    )
  }
}

