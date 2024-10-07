import apiConfig from "./apiConfig.ts";
import { IChallenge } from "../interfaces/IChallenge.ts";
import { ILogs } from "../interfaces/ILogs.ts";
import { ApiResponse } from "../interfaces/ICommon.ts";


// Define an api for creating a new challenge
const createChallenge = async (challengeData: Partial<IChallenge>): Promise<IChallenge> => {
    const response = await apiConfig.post("/challenges", challengeData);
    return response.data;
};


// Define an api for getting all challenges
const getAllChallenges = async (): Promise<ApiResponse<IChallenge[]>> => {
    const response = await apiConfig.get("/challenges");
    return response.data;
};


const getChallengeById = async (challengeId: string): Promise<ApiResponse<IChallenge>> => {
    const response = await apiConfig.get(`/challenges/${challengeId}`);
    return response.data;
};


const updateChallenge = async (challengeId: string, challengeData: Partial<IChallenge>): Promise<IChallenge> => {
    const response = await apiConfig.put(`/challenges/${challengeId}`, challengeData);
    return response.data;
};


const deleteChallenge = async (challengeId: string): Promise<void> => {
    await apiConfig.delete(`/challenges/${challengeId}`);
};


const getChallengeLogs = async (challengeId: string): Promise<IChallenge[]> => {
    const response = await apiConfig.get(`/challenges/${challengeId}/logs`);
    return response.data;
};


const createChallengeLog = async (challengeId: string, logData: Partial<ILogs>): Promise<IChallenge> => {
    const response = await apiConfig.post(`/challenges/${challengeId}/logs`, logData);
    return response.data;
};


const checkIfUserIsParticipant = async (challengeId: string): Promise<boolean> => {
    const response = await apiConfig.get(`/challenges/${challengeId}/is-participant`);
    return response.data;
};

export default {
    createChallenge,
    getAllChallenges,
    getChallengeById,
    updateChallenge,
    deleteChallenge,
    getChallengeLogs,
    createChallengeLog,
    checkIfUserIsParticipant
}