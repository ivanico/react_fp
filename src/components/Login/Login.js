import React from "react";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import axios from "axios";


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            passwordType: "password"
        }
    }

    InputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    TogglePassword = () => {
        this.setState({
            passwordType: this.state.passwordType === "password" ? "text" : "password" 
        });
    }

    LoginSubmit = () => {
        axios.post("http://127.0.0.1:8080/api/v1/auth/login",this.state)
        .then(res => {
            localStorage.setItem('user', res.data.token);
            localStorage.setItem('username', res.data.u.first_name);
            localStorage.setItem('lastname', res.data.u.last_name);
        })
        .then(this.props.history.push('/product'))
        .catch(err => { alert('Your e-mail or password is incorrect')
            this.props.history.push('/')
        })
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