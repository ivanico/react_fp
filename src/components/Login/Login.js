import React from "react";
import { Input } from "./Input";
import {LoginU} from "../../actions/LoginActions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            passwordType: "password",
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

    LoginSubmit = () => {
        this.props.LoginU(this.state.email, this.state.password);
        setTimeout(() => {this.props.history.push('/product')}, 500);
    }


    render() {
        return (
            <div id="login">
                <div id="login-form">
                    <label>E-mail</label>
                    <Input 
                        handleChange={this.InputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="E-mail"
                    />
                    <label>Password</label>
                    <Input 
                        handleChange={this.InputChangeHandler}
                        name="password"
                        type={this.state.passwordType}
                        placeholder="Password"
                        togglePassword={this.TogglePassword}
                    />
                    <button onClick={this.LoginSubmit} className="action-button">Sign In</button>         
                </div>
                <div id="register-now">
                <span>Or if you don't have an account, <Link to="/register">Register</Link></span>
                </div>
            </div>
        )
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
      LoginU: (email, password) => {
        dispatch(LoginU(email, password));
      }
    }
}

const MapStateToProps = () => {
    return {}
}

export default connect(MapStateToProps, MapDispatchToProps)(Login);