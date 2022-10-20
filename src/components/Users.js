import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/UsersAction";

const Users = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.usersState);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            Users
            <br />
            {userData.loading ? (
                <h2>Loading...</h2>
            ) : userData.error ? (
                <p>{userData.error}</p>
            ) : (
                userData.users.map((user, index) => <p key={index}>{user.name}</p>)
            )}
        </div>
    );
};

export default Users;
