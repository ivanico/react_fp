import axios from "axios";

export const FetchProductStart = (products) => {
    return{
        type:'FETCH_PRODUCTS',
        payload: products
    }
}

export const CreateProductStart = (product) => {
    return{
        type:'CREATE_PRODUCT',
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

export const CreateProduct = (product) => {
    return dispatch => {
        const api = 'http://127.0.0.1:8080/api/v1/products';
        const token = localStorage.getItem('user');
        const axiosToken = axios.create({
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        axiosToken.post(api, product)
        .then(res => dispatch(CreateProductStart(res.data)))
        .catch(err =>dispatch(FetchProductError(err)))
    }
}