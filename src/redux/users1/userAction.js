import axios from "axios";
const fetchUserAction = () => {
    return {
        type: "FETCH_USERS",
    };
};

const fetchUserSuccess = (users) => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: users,
    };
};

const fetchUserFailed = (error) => {
    return {
        type: "FETCH_USERS_FAILED",
        payload: error,
    };
};

const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserAction());

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchUserFailed(errorMsg));
            });
    };
};

export default fetchUsers;
