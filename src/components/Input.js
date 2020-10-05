import React from "react";

export class Input extends React.Component {
    render() {
        return (
            <p>
                <input 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    email={this.props.email}
                    onChange={this.props.handleChange}
                />
                {this.props.email === "password" ?
                    <button onClick={this.props.togglePassword} className="eye-button" type="button">
                        <i className={"fas " + (this.props.type === "password" ? "fas eye-slash" : "fa-eye" )}></i> 
                    </button> : null}
            </p>
        )
    }
}