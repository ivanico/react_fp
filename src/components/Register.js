import React from 'react';
import { Input } from "./Login/Input";
import { connect } from "react-redux";
import { RegisterU } from "../actions/RegisterAction"

class Register extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            user: {
            first_name: "",
            last_name: "",
            email: "",
            date_of_birth: "",
            telephone: "",
            country: "",
            password: ""
            }
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
        this.props.RegisterU(this.state.user);
    }

    render() {
        return(
            <div>
                <Input
                    handleChange={this.InputChangeHandler}
                    name="first_name"
                    type="text"
                    placeholder="First Name"                
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="last_name"
                    type="text"
                    placeholder="Last Name"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="email"
                    type="text"
                    placeholder="E-mail"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="date_of_birth"
                    type="text"
                    placeholder="Date of Birth"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="telephone"
                    type="text"
                    placeholder="Telephone"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="country"
                    type="text"
                    placeholder="Country"                  
                />
                <Input
                    handleChange={this.InputChangeHandler}
                    name="password"
                    type={this.state.passwordType}
                    placeholder="Password"
                    togglePassword={this.TogglePassword}                  
                />
                <button onClick={this.RegisterUser}>REGISTER</button>
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