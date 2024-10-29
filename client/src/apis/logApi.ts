import { ApiResponse } from '../interfaces/ICommon';
import {ILog} from '../interfaces/ILogs';
import apiConfig from './apiConfig';


export const createLog = async (logData: ILog): Promise<ApiResponse<ILog>> => {
    const response = await apiConfig.post('/logs', logData);
    return response.data;
};

export const getChallengeLogs = async (challengeId: string): Promise<ApiResponse<ILog[]>> => {
    const response = await apiConfig.get(`/logs/challenge/${challengeId}`);
    return response.data;
};

export const getUserLogs = async (): Promise<ApiResponse<ILog[]>> => {
    const response = await apiConfig.get(`/logs`);
    return response.data;
};

export const findLogForTheDay = async (challengeId: string): Promise<ApiResponse<ILog>> => {
    const response = await apiConfig.get(`/logs/getActiveLog/${challengeId}`);
    return response.data;
};

export const getChallengeUserLogs = async (challengeId: string): Promise<ApiResponse<ILog[]>> => {
    const response = await apiConfig.get(`/logs/${challengeId}`);
    console.log(response.data);
    return response.data;
};

export const getLogById = async (logId: string): Promise<ApiResponse<ILog> | null> => {
    const response = await apiConfig.get(`/logs/${logId}`);
    return response.data;
};

export const updateLogById = async (logId: string, updateData: Partial<ILog>): Promise<ApiResponse<ILog> | null> => {
    const response = await apiConfig.put(`/logs/${logId}`, updateData);
    return response.data;
};
