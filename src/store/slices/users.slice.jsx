import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setSelectedUser } from "./selectedUser.slice";

export const UsersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        setUsers: (state, action) => {
            return action.payload;
        },
    },
});

export const getUsersThunk = () => (dispatch) => {
    return axios
        .get("http://localhost:8080/users")
        .then((resp) => dispatch(setUsers(resp.data)))
        .catch((error) => console.error(error));
};

export const createUsersThunk = (data) => (dispatch) => {
    return axios
        .post("http://localhost:8080/users", data)
        .then(() => dispatch(getUsersThunk()))
        .catch((error) => console.error(error));
};

export const updateUserThunk = (data) => (dispatch) => {
    return axios
        .put(`http://localhost:8080/users/${data.id}`, data)
        .then(
            () => (dispatch(getUsersThunk()), dispatch(setSelectedUser(null)))
        )
        .catch((error) => console.error(error));
};

export const deleteUserThunk = (data) => (dispatch) => {
    return axios
        .delete(`http://localhost:8080/users/${data.id}`)
        .then(() => dispatch(getUsersThunk()))
        .catch((error) => console.error(error));
};

export const { setUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
