import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchUsers from "../redux/users1/userAction";

const Users1 = () => {
    const usersData = useSelector((state) => state.users1State);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h1>Users</h1>

            {usersData.loading ? (
                <p>Loading...</p>
            ) : usersData.error ? (
                <p>{usersData.error}</p>
            ) : (
                usersData.users.map((user) => <p key={user.id}>{user.name}</p>)
            )}
        </div>
    );
};

export default Users1;
