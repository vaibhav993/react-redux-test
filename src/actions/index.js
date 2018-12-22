import API from "../api/api";


export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const RECEIVED_USERS = "RECEIVED_USERS";

export const receivedUsers = (users) => ({
    type: RECEIVED_USERS,
    users: users
})

export const fetchUsers = () => (dispatch, getState) => {
    dispatch({
        type: FETCH_ALL_USERS,
        pageid: 1
    });

    return API.get(`/users?fields=id,name,email,gender,phone,dob`)
        .then(res => {
            if( res.status === 200 ) {
                dispatch(receivedUsers(res.data.result || []));
            }
        });
}