import {
    SET_AUTH_USER,
    CLEAR_AUTH
} from './actionType'

let initState = {
    loading: true,}
    let newState = {}
const auth = (state = {}, action) => {
    switch (action.type) {
        
        case SET_AUTH_USER:
          newState = {
            ...state,
            loggedIn: true,
            ...action.user,
            profile:action.user.profile
        }
        return newState
        case CLEAR_AUTH:
            newState={}
            return newState
        default:
            return state
    }
}

export default auth