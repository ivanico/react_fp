import React from "react";
import { Input } from "./Input";
import {LoginU} from "../../actions/LoginActions";
import {connect} from "react-redux";


class Login extends React.Component {

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
            passwordType: this.state.passwordType === "text" ? "password" : "text"
        });
    }

    LoginSubmit = () => {
        this.props.LoginU(this.state.email, this.state.password);
        console.log(this.props)
    }

    test = () => {
        console.log(localStorage.getItem('user'));
    }

    render() {
        return (
            <div id="login">
                    <Input 
                        handleChange={this.InputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="E-mail"
                    />
                    <Input 
                        handleChange={this.InputChangeHandler}
                        name="password"
                        type={this.state.passwordType}
                        placeholder="Password"
                        togglePassword={this.TogglePassword}
                    />
                    <button onClick={this.LoginSubmit} className="action-button">Sign In</button>
                    <button onClick={this.test}></button>
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