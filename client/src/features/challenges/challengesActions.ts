import { createAsyncThunk } from "@reduxjs/toolkit";
import challengeService from "../../services/challengeService";
import { IChallenge } from "../../interfaces/IChallenge";


export const createChallenge = createAsyncThunk(
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



export const getAllChallenges = createAsyncThunk(
    'challenges/getAllChallenges',
    async (_, {rejectWithValue}) => {
        try {
            return await challengeService.getAllChallenges();
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const getChallengeById = createAsyncThunk(
    'challenges/getChallengeById',
    async (challengeId: string, {rejectWithValue}) => {
        try {
            return await challengeService.getChallengeById(challengeId);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
)


export const checkIfUserIsParticipant = createAsyncThunk(
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


export const joinChallenge = createAsyncThunk(
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


export const leaveChallenge = createAsyncThunk(
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