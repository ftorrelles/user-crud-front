import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
    name: "show",
    initialState: false,
    reducers: {
        setShowForm: (state, action) => {
            return action.payload;
        },
    },
});

export const { setShowForm } = showSlice.actions;

export default showSlice.reducer;
