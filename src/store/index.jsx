import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users.slice";
import selectedUserSlice from "./slices/selectedUser.slice";
import showSlice from "./slices/showForm.slice";

export default configureStore({
    reducer: {
        users: usersSlice,
        selectedUser: selectedUserSlice,
        show: showSlice,
    },
});
