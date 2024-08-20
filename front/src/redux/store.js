import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        actualUser: userSlice,
    }
});

export default store;