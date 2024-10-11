import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/IUser";
import {fetchUsers, getUserById, inviteUser} from "./usersActions.ts";
import {ApiResponse} from "../../interfaces/ICommon.ts";

interface InitialState {
    users: IUser[],
    user: IUser | null,
    message: string | null,
    loading: boolean,
    error: string | null
}

const initialState: InitialState = {
    users: [],
    user: null,
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
        extraReducers: (builder) => {
            // Add extra reducers here
            builder
                .addCase(fetchUsers.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<ApiResponse<IUser[]>>) => {
                    state.loading = false;
                    state.users = action.payload.data ?? [];
                })
                .addCase(fetchUsers.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message ?? '';
                })
                .addCase(inviteUser.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(inviteUser.fulfilled, (state, action: PayloadAction<ApiResponse<IUser>>) => {
                    state.loading = false;
                    state.message = action.payload.message;
                })
                .addCase(inviteUser.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message ?? '';
                })
                .addCase(getUserById.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getUserById.fulfilled, (state, action: PayloadAction<ApiResponse<IUser>>) => {
                    state.loading = false;
                    state.user = action.payload.data;
                })
                .addCase(getUserById.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message ?? '';
                })
                .addCase(getUsersTotalChallengeParticipation.pending, (state) => {})


        }
    }
);
