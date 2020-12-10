import{
    SET_COURSE_DETAILS
} from './actionType'

let newState={}

const courseDetails = (state={}, action)=>{

    switch (action.type) {
        case SET_COURSE_DETAILS:
            newState ={
                ...state,
                ...action.data
            }
            return newState
        default:
                return state
    }
}

export default courseDetails