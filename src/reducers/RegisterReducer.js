const initialState = {
    user: [],
    error: ""
}

const RegisterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "REGISTER_USER" :
            return {
                ...state,
                user: action.payload
            }
        case "REGISTER_ERROR" :
            return{      
                ...state,
                error: action.payload        
                }
        default: return state;
    }
}
export default RegisterReducer;