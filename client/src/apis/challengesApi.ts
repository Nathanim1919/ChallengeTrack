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
const getAllChallenges = async (page:number, limit:number): Promise<ApiResponse<IChallenge[]>> => {
    const response = await apiConfig.get(`/challenges?page=${page}&limit=${limit}`);
    return response.data;
};

const getMyChallenges = async (): Promise<ApiResponse<IChallenge[]>> => {
    const response = await apiConfig.get("/my-challenges");
    return response.data;
};

const checkIfUserIsOwner = async (challengeId: string): Promise<boolean> => {
    const response = await apiConfig.get(`/challenges/${challengeId}/isOwner`);
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


const joinChallenge = async (challengeId: string): Promise<ApiResponse<IChallenge>> => {
    const response = await apiConfig.post(`/challenges/${challengeId}/participants`);
    return response.data;
};

const leaveChallenge = async (challengeId: string): Promise<IChallenge> => {
    const response = await apiConfig.delete(`/challenges/${challengeId}/participants`);
    return response.data;
};

const markChallengeAsCompleted = async (challengeId: string): Promise<IChallenge> => {
    const response = await apiConfig.put(`/challenges/${challengeId}/complete`);
    return response.data;
};

const getChallengeParticipants = async (challengeId: string): Promise<IChallenge> => {
    const response = await apiConfig.get(`/challenges/${challengeId}/participants`);
    return response.data;
};

const inviteUserToChallenge = async (challengeId: string, userId: string): Promise<IChallenge> => {
    const response = await apiConfig.post(`/challenges/${challengeId}/invite`, { userId });
    return response.data;
};

const reportAsInappropriate = async (challengeId: string): Promise<void> => {
    await apiConfig.post(`/challenges/${challengeId}/report`);
};

export default {
    createChallenge,
    getAllChallenges,
    getMyChallenges,
    getChallengeById,
    updateChallenge,
    deleteChallenge,
    getChallengeLogs,
    createChallengeLog,
    checkIfUserIsParticipant,
    joinChallenge,
    leaveChallenge,
    markChallengeAsCompleted,
    getChallengeParticipants,
    inviteUserToChallenge,
    reportAsInappropriate,
    checkIfUserIsOwner
}
