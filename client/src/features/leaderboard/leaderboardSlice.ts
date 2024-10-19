import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGlobalLeaderboard, ILeaderboard } from "../../interfaces/ILeaderBoard";
import { getGlobalLeaderboard, getLeaderBoardByChallengeId, getLeaderboardById } from "./leaderboardAction";
import { ApiResponse } from "../../interfaces/ICommon";


interface initialStateProps {
    leaderboard: ILeaderboard;
    globalLeaderboard: IGlobalLeaderboard[];
    loading: boolean;
    error: string | null;
    message: string;
}


const initialState: initialStateProps = {
    leaderboard: {} as ILeaderboard,
    globalLeaderboard: [] as IGlobalLeaderboard[],
    loading: false,
    error: null,
    message: "",
}


const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setMessage(state, action) {
            state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLeaderboardById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLeaderboardById.fulfilled, (state, action: PayloadAction<ApiResponse<ILeaderboard>>) => {
                state.leaderboard = action.payload.data??{} as ILeaderboard;
                state.loading = false;
                state.error = null;
            })
            .addCase(getLeaderboardById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to get leaderboard";
            })
            .addCase(getGlobalLeaderboard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getGlobalLeaderboard.fulfilled, (state, action: PayloadAction<ApiResponse<IGlobalLeaderboard[]>>) => {
                state.globalLeaderboard = action.payload.data??[] as IGlobalLeaderboard[];
                state.loading = false;
                state.error = null;
            }
            )
            .addCase(getGlobalLeaderboard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to get global leaderboard";
            })
            .addCase(getLeaderBoardByChallengeId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLeaderBoardByChallengeId.fulfilled, (state, action) => {
                state.leaderboard = action.payload.data??{} as ILeaderboard;
                state.loading = false;
                state.error = null;
            })
            .addCase(getLeaderBoardByChallengeId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to get leaderboard";
            });
    }
});


export const { setLoading, setError, setMessage } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;