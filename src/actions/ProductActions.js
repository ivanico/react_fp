import axios from "axios";

export const FetchProductStart = (products) => {
    return{
        type:'FETCH_PRODUCT',
        payload: products
    }
}

export const FetchProductError = (err) => {
    return {
        type: "FETHC_PRODUCT_ERROR",
        payload:err
    }
}

export const FetchProducts = () => {
    return dispatch => {
        axios.get("http://127.0.0.1:8080/api/v1/products")
        .then(res => dispatch(FetchProductStart(res.data)))
        .catch(err =>dispatch(FetchProductError(err)))
    }
}