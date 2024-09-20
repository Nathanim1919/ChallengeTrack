import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice";
import challengesReducer from "../features/challenges/challengesSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer, // Register the auth slice here
        users: usersReducer,
        challenges: challengesReducer,
    },
});

// Export RootState and AppDispatch types for use throughout the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
