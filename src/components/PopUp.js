import React, { Component } from "react";


export default class PopUp extends Component {

  
handleClick = () => {
   this.props.toggle();
  };

render() {
  return (
   <div id="popup">
     <div>
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <h2>Delete Product</h2>
     <p>You are about to delete this product. Are you sure you wish to continue?</p>
     <button onClick={this.props.delete}>Delete</button>
    </div>
   </div>
  );
 }
}