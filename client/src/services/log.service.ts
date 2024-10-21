import { logsApi } from "../apis";
import { ILog } from "../interfaces/ILogs";

const createLog = async (logData: Partial<ILog>) => {
    return await logsApi.createLog(logData);
};

const getChallengeLogs = async (challengeId: string) => {
    return await logsApi.getChallengeLogs(challengeId);
};

const getUserLogs = async () => {
    return await logsApi.getUserLogs();
};

const getChallengeUserLogs = async (challengeId: string) => {
    return await logsApi.getChallengeUserLogs(challengeId);
};

const getLogById = async (logId: string) => {
    return await logsApi.getLogById(logId);
};

const updateLogById = async (logId: string, updateData: Partial<ILog>) => {
    return await logsApi.updateLogById(logId, updateData);
};

export default {
    createLog,
    getChallengeLogs,
    getUserLogs,
    getChallengeUserLogs,
    getLogById,
    updateLogById
}