import {createAsyncThunk} from "@reduxjs/toolkit";
import {authServices} from "../../services/index.ts";



// Define the thunk for registering a user
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async ({name, email, username, password}: {name: string, username: string, email: string, password: string }, {rejectWithValue}) => {
        try {

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
    async ({identifier, password}: { identifier: string, password: string }, {rejectWithValue}) => {
        try {
            const {data} =  await authServices.loginUser({identifier, password});
            console.log(data    );
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
});


export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authServices.getCurrentUser();
            console.log(data);
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
) 



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
});
