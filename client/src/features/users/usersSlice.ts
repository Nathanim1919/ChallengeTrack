import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, UserMatrix} from "../../interfaces/IUser";
import {
    fetchUsers,
    getUserById,
    inviteUser,
    getUserMatrix
} from "./usersActions.ts";
import {ApiResponse} from "../../interfaces/ICommon.ts";

interface InitialState {
    users: IUser[],
    user: IUser | null,
    userMatrix:UserMatrix,
    message: string | null,
    loading: boolean,
    error: string | null
}

const initialState: InitialState = {
    users: [],
    user: null,
    userMatrix: {
        totalChallengeParticipation: 0,
        totalChallengeWins: 0,
        totalPoints: 0,
        totalLogs: 0,
        totalAchievements: 0
    },
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
                    state.message = action.payload.message??'User invited successfully';
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
                .addCase(getUserMatrix.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getUserMatrix.fulfilled, (state, action: PayloadAction<ApiResponse<UserMatrix>>) => {
                    state.loading = false;
                    state.userMatrix = action.payload.data??{
                        totalChallengeParticipation: 0,
                        totalChallengeWins: 0,
                        totalPoints: 0,
                        totalLogs: 0,
                        totalAchievements: 0
                    };
                })
                .addCase(getUserMatrix.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message ?? '';
                })
        }
    }
);
