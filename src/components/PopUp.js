import React, { Component } from "react";


export default class PopUp extends Component {
  
  
handleClick = () => {
   this.props.toggle();
  };

render() {
  return (
   <div>
     <div>
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <p>You are about to delete this product. Are you sure you wish to continue?</p>
     <button onClick={this.props.delete}>Delete</button>
    </div>
   </div>
  );
 }
}