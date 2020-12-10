import {
    SET_AUTH_USER, CLEAR_AUTH_USER
} from "../actions/actions";

let initialState = {
    user: {},
    isOnline : true,
    showFallBack : false,
    isLoggedIn: false
}
let newState = {};
const auth = (state = initialState, action) =>{
    switch (action.type){
        case SET_AUTH_USER:
            newState = {
                ...state,
                isLoggedIn: true,
                user: action.user
            };
            return newState;
        case CLEAR_AUTH_USER:
            newState = {
                ...this.state
            };
            return newState;
        default: return state;
    }
}
export default auth;