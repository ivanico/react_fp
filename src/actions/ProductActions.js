import axios from "axios";

export const FetchProductStart = (products) => {
    return{
        type:'FETCH_PRODUCTS',
        payload: products
    }
}

export const FetchProduct = (product) => {
    return{
        type:'FETCH_PRODUCT',
        payload: product
    }
}

export const FetchProductError = (err) => {
    return {
        type: "FETHC_PRODUCTS_ERROR",
        payload:err
    }
}

export const FetchProducts = () => {
    return dispatch => {
        const api = 'http://127.0.0.1:8080/api/v1/products';
        const token = localStorage.getItem('user');
        const axiosToken = axios.create({
            baseURL: api,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        axiosToken.get()
        .then(res => dispatch(FetchProductStart(res.data)))
        .catch(err =>dispatch(FetchProductError(err)))
    }
}

