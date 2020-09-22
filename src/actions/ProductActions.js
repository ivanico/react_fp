import axios from "axios";

export const FetchProductStart = (product) => {
    return{
        type:'FETCH_PRODUCT',
        payload: product
    }
}

export const FetchProductError = (err) => {
    return {
        type: "FETHC_PRODUCT_ERROR",
        payload:err
    }
}

export const FetchLogin = () => {
    return dispatch => {
        axios.get("http://127.0.0.1:8082/")
        .then(res => dispatch(FetchProductStart(res.data.results)))
        .catch(err =>dispatch(FetchProductError(err)))
    }
}