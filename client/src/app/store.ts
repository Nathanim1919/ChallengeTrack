import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
// import usersReducer from "../features/users/usersSlice";
import challengesReducer from "../features/challenges/challengesSlice";
import categorieReducer from "../features/categories/categorieSlice";
import leaderbordReducer from "../features/leaderboard/leaderboardSlice";
import logReducer from "../features/logs/logSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer, // Register the auth slice here
        // users: usersReducer,
        challenges: challengesReducer,
        categories: categorieReducer,
        leaderboard: leaderbordReducer,
        logs: logReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export default store;
