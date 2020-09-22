const initialState = {
    product: [],
    error: ""
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCT" :
            return {
                ...state,
                products: action.payload
            }
        case "FETCH_PRODUCT_ERROR" :
            return{      
                ...state,
                error: action.payload        
                }
        default: return state;
    }
}
export default ProductReducer;