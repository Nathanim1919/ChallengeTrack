import { createAsyncThunk } from "@reduxjs/toolkit";
import {ApiResponse} from "../../interfaces/ICommon.ts";
import {IUser} from "../../interfaces/IUser.ts";
import { userServices } from "../../services/index.ts";


export const fetchUsers = createAsyncThunk<ApiResponse<IUser[]>>(
    'users/fetchUsers',
    async () => {
        try{
            return await userServices.fetchUsers();
        } catch(error){
            if(error instanceof Error){
                return error.message;
            } else {
                return "An unknown error occurred";
            }
        }
    }
)


export const inviteUser = createAsyncThunk<ApiResponse<IUser>, { identifier?: string; challengeId?: string }>(
    'users/inviteUser',
    async ({identifier, challengeId},  {rejectWithValue}) => {
        try {
            return await userServices.inviteUser(identifier, challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUserById = createAsyncThunk<ApiResponse<IUser>, {identifier?: string}>(
    'users/getUserById',
    async ({identifier}, {rejectWithValue}) => {
        try {
            return await userServices.getUserById(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalChallengeParticipation = createAsyncThunk<ApiResponse<number>, {identifier?:string}>(
    'users/getUsersTotalChallengeParticipation',
    async (identifier, {rejectWithValue}) => {
        try {
            return await userServices.getUsersTotalChallengeParticipation(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalChallengeWins = createAsyncThunk<ApiResponse<number>, {identifier?: string}>(
    'users/getUsersTotalChallengeWins',
    async (identifier, {rejectWithValue}) => {
        try {
            return await userServices.getUsersTotalChallengeWins(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalPoints = createAsyncThunk<ApiResponse<number>, {identifier?:string}>(
    'users/getUsersTotalPoints',
    async (identifier, {rejectWithValue}) => {
        try {
            return await userServices.getUsersTotalPoints(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalLogs = createAsyncThunk<ApiResponse<number>, {identifier?:string, challengeId?: string}>(
    'users/getUsersTotalLogs',
    async ({identifier, challengeId}, {rejectWithValue}) => {
        try {
            return await userServices.getUsersTotalLogs(identifier, challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalAchievements = createAsyncThunk<ApiResponse<number>, {identifier?:string}>(
    'users/getUsersTotalAchievements',
    async (identifier, {rejectWithValue}) => {
        try {
            return await userServices.getUsersTotalAchievements(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)
