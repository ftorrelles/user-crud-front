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
        .get("https://user-crud-17xx.onrender.com/users")
        .then((resp) => dispatch(setUsers(resp.data)))
        .catch((error) => console.error(error));
};

export const createUsersThunk = (data) => (dispatch) => {
    return axios
        .post("https://user-crud-17xx.onrender.com/users", data)
        .then(() => dispatch(getUsersThunk()))
        .catch((error) => console.error(error));
};

export const updateUserThunk = (data) => (dispatch) => {
    return axios
        .put(`https://user-crud-17xx.onrender.com/users/${data.id}`, data)
        .then(
            () => (dispatch(getUsersThunk()), dispatch(setSelectedUser(null)))
        )
        .catch((error) => console.error(error));
};

export const { setUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
