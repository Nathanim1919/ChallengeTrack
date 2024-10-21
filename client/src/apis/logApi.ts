import {ILog} from '../interfaces/ILogs';
import apiConfig from './apiConfig';


export const createLog = async (logData: ILog): Promise<ILog> => {
    const response = await apiConfig.post('/logs', logData);
    return response.data;
};

export const getChallengeLogs = async (challengeId: string): Promise<ILog[]> => {
    const response = await apiConfig.get(`/logs/challenge/${challengeId}`);
    return response.data;
};

export const getUserLogs = async (userId: string): Promise<ILog[]> => {
    const response = await apiConfig.get(`/logs/${userId}`);
    return response.data;
};

export const getChallengeUserLogs = async (challengeId: string): Promise<ILog[]> => {
    const response = await apiConfig.get(`/logs/userLog/${challengeId}`);
    return response.data;
};

export const getLogById = async (logId: string): Promise<ILog | null> => {
    const response = await apiConfig.get(`/logs/${logId}`);
    return response.data;
};

export const updateLogById = async (logId: string, updateData: Partial<ILog>): Promise<ILog | null> => {
    const response = await apiConfig.put(`/logs/${logId}`, updateData);
    return response.data;
};
