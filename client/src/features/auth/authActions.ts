import {createAsyncThunk} from "@reduxjs/toolkit";
import {authServices} from "../../services/index.ts";


// Define the thunk for registering a user
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async ({name, email, username, password}: {name: string, username: string, email: string, password: string }, {rejectWithValue}) => {
        try {
            console.log("registerUser thunk");
            return await authServices.registerUser({name, email, username, password});
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({email, password}: { email: string, password: string }, {rejectWithValue}) => {
        try {
            return await authServices.loginUser({email, password});
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
})



export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, {rejectWithValue}) => {
        try {
            return await authServices.logoutUser();
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
})
