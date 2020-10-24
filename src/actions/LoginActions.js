import axios from "axios";

export const LoginStart = (user) => {
    return{
        type:'LOGIN_USER',
        payload: user
    }
}

export const LoginError = (err) => {
    return {
        type: "LOGIN_USER_ERROR",
        payload:err
    }
}

export const LoginU = (email, password) => {
    return dispatch => {
        axios.post("http://127.0.0.1:8080/api/v1/auth/login", {email, password})
        .then(res => {
            localStorage.setItem('user', res.data.token);
            localStorage.setItem('username', res.data.u.first_name);
            localStorage.setItem('lastname', res.data.u.last_name);
            dispatch(LoginStart(res.data.token));
        })
        .catch(err => { dispatch(LoginError(err))
        alert('Your e-mail or password is incorrect')})
    }
}