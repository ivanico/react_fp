import React from "react";
import { Input } from "./Input";

export class Login extends React.Component {

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
            [event.target.email]: event.target.value
        });
    }

    TogglePassword = () => {
        this.setState({
            passwordType: this.state.passwordType === "text" ? "password" : "text"
        });
    }


    render() {
        return (
            <div id="login">
                <form onSubmit={this.SubmitForm}>
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
                    <button className="action-button">Sign In</button>
                </form>
            </div>
        )
    }
}