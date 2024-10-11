import { createAsyncThunk } from "@reduxjs/toolkit";
import usersService from '../services/usersService';
import { IUser } from '../interfaces/IUser';
import { ApiResponse } from '../interfaces/ICommon';


export const fetchUsers = createAsyncThunk<ApiResponse<IUser[]>>(
    'users/fetchUsers',
    async () => {
        try{
            return await usersService.fetchUsers();
        } catch(error){
            if(error instanceof Error){
                return error.message;
            } else {
                return "An unknown error occurred";
            }
        }
    }
)


export const inviteUser = createAsyncThunk<ApiResponse<IUser>, string>(
    'users/inviteUser',
    async (identifier: string, challengeId: string,  {rejectWithValue}) => {
        try {
            return await usersService.inviteUser(userId, challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUserById = createAsyncThunk<ApiResponse<IUser>, string>(
    'users/getUserById',
    async (userId?: string, {rejectWithValue}) => {
        try {
            return await usersService.getUserById(userId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalChallengeParticipation = createAsyncThunk<ApiResponse<number>, string>(
    'users/getUsersTotalChallengeParticipation',
    async (identifier?: string, {rejectWithValue}) => {
        try {
            return await usersService.getUsersTotalChallengeParticipation(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalChallengeWins = createAsyncThunk<ApiResponse<number>, string>(
    'users/getUsersTotalChallengeWins',
    async (identifier?: string, {rejectWithValue}) => {
        try {
            return await usersService.getUsersTotalChallengeWins(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalPoints = createAsyncThunk<ApiResponse<number>, string>(
    'users/getUsersTotalPoints',
    async (identifier?: string, {rejectWithValue}) => {
        try {
            return await usersService.getUsersTotalPoints(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalLogs = createAsyncThunk<ApiResponse<number>, string>(
    'users/getUsersTotalLogs',
    async (identifier?: string, challengeId?: string, {rejectWithValue}) => {
        try {
            return await usersService.getUsersTotalLogs(identifier, challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getUsersTotalAchievements = createAsyncThunk<ApiResponse<number>, string>(
    'users/getUsersTotalAchievements',
    async (identifier?: string, {rejectWithValue}) => {
        try {
            return await usersService.getUsersTotalAchievements(identifier);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)