import  { FETCH_ALL_USERS, RECEIVED_USERS} from "../actions"
const defaultState = {
    isLoading: false,
    users: []
}
const getUsers = ( state= defaultState, action) => {
    switch(action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                isLoading: true
            }
        case RECEIVED_USERS:
            return {
                ...state,
                isLoading: false,
                users: action.users
            }
        default:
            return state
    }
}

export default getUsers;