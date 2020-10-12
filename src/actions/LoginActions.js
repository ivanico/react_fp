import axios from "axios";

export const FetchLoginStart = (users) => {
    return{
        type:'FETCH_USERS',
        payload: users
    }
}

export const FetchLoginError = (err) => {
    return {
        type: "FETHC_USERS_ERROR",
        payload:err
    }
}

export const FetchLogin = () => {
    return dispatch => {
        axios.post("http://127.0.0.1:8080/api/v1/auth/login")
        .then(res => dispatch(FetchLoginStart(res.data.results)))
        .catch(err =>dispatch(FetchLoginError(err)))
    }
}