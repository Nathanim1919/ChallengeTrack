import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser.ts";
import { registerUser, loginUser, logoutUser, getCurrentUser } from "./authActions.ts";


// Define the shape of your authentication state
interface AuthSlice {
    user: IUser | null;
    navigateto: string;
    accessToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

// Define the initial state of the authentication slice
const initialState: AuthSlice = {
    user: null,
    navigateto: "",
    accessToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

// Create the authentication slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
                state.navigateto = ("/login");

            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.navigateto = "/register";
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.accessToken = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // .addCase(refreshToken.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(refreshToken.fulfilled, (state, action) => {
            //     state.user = action.payload.data?.user || null;
            //     state.loading = false;
            //     state.error = null;
            // })
            // .addCase(refreshToken.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload as string;
            // });
    },
});

// Export the actions generated by the slice
export const { setLoading, setError } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
