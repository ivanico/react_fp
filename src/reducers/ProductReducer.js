const initialState = {
    products: [],
    product:{},
    error: ""
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS" :
            return {
                ...state,
                products: action.payload
            };
        case "CREATE_PRODUCT" :
            return {
                ...state,
                product: action.payload
            };       
        case "FETCH_PRODUCTS_ERROR" :
            return{      
                ...state,
                error: action.payload        
                };
                
        default: return state;
    }
};

export default ProductReducer;