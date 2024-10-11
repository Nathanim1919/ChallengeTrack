import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";
import { setError, setLoading } from "../auth/authSlice";
import { setMessage } from "../leaderboard/leaderboardSlice";

interface InitialState  {
    users: IUser[],
    message: string | null,
    loading: boolean,
    error: string | null
}
const initialState: InitialState = {
  users: [],
  message: null,
  loading: false,
  error: null,
};



const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
    },
    extraReducers: {
        
    }
});