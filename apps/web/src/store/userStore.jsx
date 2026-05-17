import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slice/UserSlice"

const userStore = configureStore({
    reducer:{
        usersInfo: userReducer
    }
});

export default userStore;