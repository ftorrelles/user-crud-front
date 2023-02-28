import { createSlice } from "@reduxjs/toolkit";

export const selectedUserSlice = createSlice({
    name: "selectedUser",
    initialState: null,
    reducers: {
        setSelectedUser: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSelectedUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
