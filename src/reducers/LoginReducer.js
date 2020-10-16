const initialState = {
    user: [],
    error: ""
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN_USER" :
            return {
                ...state,
                user: action.payload
            }
        case "LOGIN_USER_ERROR" :
            return{      
                ...state,
                error: action.payload        
                }
        default: return state;
    }
}
export default LoginReducer;