import { createAsyncThunk } from "@reduxjs/toolkit";
import challengeService from "../../services/challengeService";
import { IChallenge } from "../../interfaces/IChallenge";
import {ApiResponse} from "../../interfaces/ICommon.ts";
import { ILog } from "../../interfaces/ILogs.ts";


export const createChallenge = createAsyncThunk<IChallenge, Partial<IChallenge>>(
    'challenges/createChallenge',
    async (challengeData: Partial<IChallenge>, {rejectWithValue}) => {
        try {
            return await challengeService.createChallenge(challengeData);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)



export const getAllChallenges = createAsyncThunk<ApiResponse<IChallenge[]>>(
    'challenges/getAllChallenges',
    async (_, { rejectWithValue }) => {
        try {
           return  await challengeService.getAllChallenges();
            // console.log(res)
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)

export const getMyChallenges = createAsyncThunk<ApiResponse<IChallenge[]>>(
    'challenges/getMyChallenges',
    async (_, {rejectWithValue}) => {
        try {
            return await challengeService.getMyChallenges();
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getChallengeById = createAsyncThunk<{
    challenge: ApiResponse<IChallenge>;
    isParticipant: ApiResponse<boolean>;
    isOwner: ApiResponse<boolean>;
}, string>(
    'challenges/getChallengeById',
    async (challengeId: string, {rejectWithValue}) => {
        try {
            // Fetch the challenge by ID
            const challenge = await challengeService.getChallengeById(challengeId);

            // Check if the user is a participant
            const isParticipantResponse = await challengeService.checkIfUserIsParticipant(challengeId);

            // Check if the user is the owner
            const isOwnerResponse = await challengeService.checkIfUserIsOwner(challengeId);

            return {
                challenge,
                isParticipant: isParticipantResponse,
                isOwner: isOwnerResponse,
            };
            // return await challengeService.getChallengeById(challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const checkIfUserIsOwner = createAsyncThunk<ApiResponse<boolean>, string>(
    'challenges/checkIfUserIsOwner',
    async (challengeId: string, {rejectWithValue}) => {
        try {
            return await challengeService.checkIfUserIsOwner(challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);


export const checkIfUserIsParticipant = createAsyncThunk<ApiResponse<boolean>, string>(
    'challenges/checkIfUserIsParticipant',
    async (challengeId: string, {rejectWithValue}) => {
        try {
            return await challengeService.checkIfUserIsParticipant(challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);


export const joinChallenge = createAsyncThunk<{updatedChallenge: ApiResponse<IChallenge>; isParticipant: ApiResponse<boolean>}, string>(
    'challenges/joinChallenge',
    async (challengeId: string, {rejectWithValue}) => {
        try {
            // return await challengeService.joinChallenge(challengeId);
             // Join the challenge
             await challengeService.joinChallenge(challengeId);
            const updatedChallenge = await challengeService.getChallengeById(challengeId);

            // Check if the user is a participant
            const isParticipantResponse = await challengeService.checkIfUserIsParticipant(challengeId);

            return {
                updatedChallenge,
                isParticipant: isParticipantResponse,
            };

        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }

);


export const leaveChallenge = createAsyncThunk<{ updatedChallenge: ApiResponse<IChallenge>; isParticipant: ApiResponse<boolean> }, string>(
    'challenges/leaveChallenge',
    async (challengeId: string, {rejectWithValue}) => {
        try {
            // return await challengeService.joinChallenge(challengeId);
             // Join the challenge
             await challengeService.leaveChallenge(challengeId);
            const updatedChallenge = await challengeService.getChallengeById(challengeId);

            // Check if the user is a participant
            const isParticipantResponse = await challengeService.checkIfUserIsParticipant(challengeId);

            return {
                updatedChallenge,
                isParticipant: isParticipantResponse,
            };

        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);


export const addDailyLog = createAsyncThunk<ApiResponse<IChallenge>, {challengeId: string; logs: Partial<ILog>} >(
    'challenges/addDailyLog',
    async ({ challengeId, logs }, {rejectWithValue}) => {
        try {
            return await challengeService.addDailyLog(challengeId, logs);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);


export const    getPopularChallenge = createAsyncThunk<ApiResponse<IChallenge[]>>(
    "challenges/getPopularChallenge",
    async (_, { rejectWithValue }) => {
        try {
            return await challengeService.getPopularChallenge();
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);
