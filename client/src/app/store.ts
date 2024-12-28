import {configureStore} from "@reduxjs/toolkit";
import challengesReducer from "../features/challenges/challengesSlice";
import authReducer from "../features/auth/authSlice";
import categorieReducer from "../features/categories/categorieSlice";
import leaderbordReducer from "../features/leaderboard/leaderboardSlice";
import logReducer from "../features/logs/logSlice";

export const store = configureStore({
    reducer:{
        challenges: challengesReducer,
        auth: authReducer,
        categories: categorieReducer,
        leaderboard: leaderbordReducer,
        logs: logReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export default store;


