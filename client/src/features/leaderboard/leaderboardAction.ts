import { createAsyncThunk } from "@reduxjs/toolkit";
import leaderboardService from "../../services/leaderboardService";

export const getLeaderboardById = createAsyncThunk(
    'leaderboard/getLeaderboardById',
    async (leaderboardId: string, { rejectWithValue }) => {
        try {
            const response = await leaderboardService.getLeaderboardById(leaderboardId);
            return response;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getGlobalLeaderboard = createAsyncThunk(
    'leaderboard/getGlobalLeaderboard',
    async (_, { rejectWithValue }) => {
        try {
            const response = await leaderboardService.getGlobalLeaderboard();
            return response;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getLeaderBoardByChallengeId = createAsyncThunk(
    'leaderboard/getLeaderBoardByChallengeId',
    async (challengeId: string, { rejectWithValue }) => {
        try {
            const response = await leaderboardService.getLeaderBoardByChallengeId(challengeId);
            return response;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);