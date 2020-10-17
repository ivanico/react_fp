import axios from "axios";

export const RegisterStart = (user) => {
    return{
        type:'REGISTER_USER',
        payload: user
    }
}

export const RegisterError = (err) => {
    return {
        type: "REGISTER_ERROR",
        payload:err
    }
}

export const RegisterU = (user) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8080/api/v1/auth/register',
            data: user
        })
        .then(res => dispatch(RegisterStart(res.data)))
        .catch(err => dispatch(RegisterError(err)))
    }
}