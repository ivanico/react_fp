import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { RegisterU } from "../actions/RegisterAction";
import { Input } from "../components/Login/Input";

class Register extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            date_of_birth: "",
            telephone: "",
            country: "",
            password: ""    
        }
    }

    InputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    TogglePassword = () => {
        this.setState({
            passwordType: this.state.passwordType === "text" ? "password" : "text"
        });
    }

    RegisterUser = () => {
        this.props.RegisterU(this.state);
    }

    render() {
        return(
            <div id="register">
            <div id="register-form">
            <label>First Name</label>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="first_name"
                    type="text"
                    placeholder="First Name"                
                />
                <label>Last Name</label>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="last_name"
                    type="text"
                    placeholder="Last Name"                  
                />
                <label>E-mail</label>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="email"
                    type="text"
                    placeholder="E-mail"                  
                />
                <label>Date of Birth</label>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="date_of_birth"
                    type="text"
                    placeholder="Date of Birth"                  
                />
                <label>Telephone</label>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="telephone"
                    type="text"
                    placeholder="Telephone"                  
                />
                <label>Country</label>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="country"
                    type="text"
                    placeholder="Country"                  
                />
                <label>Password</label>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="password"
                    type={this.state.passwordType}
                    placeholder="Password"
                    togglePassword={this.TogglePassword}                  
                />
                <button onClick={this.RegisterUser}>REGISTER</button>
                
            </div>
            <div id="register-now">
            <span>Or if you already have an account, <Link to="/">Sign in</Link></span>
            </div>
            </div>
        )
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
      RegisterU: (user) => {
        dispatch(RegisterU(user));
      }
    }
}

const MapStateToProps = () => {
    return {}
}

export default connect(MapStateToProps, MapDispatchToProps)(Register);