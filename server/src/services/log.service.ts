import { ILog } from "../interfaces/ILogs";
import { LogRepository } from "../repositories/log.repository";

class LogService {
    constructor(private logrepository: LogRepository) {
    }


    async createLog(logData: ILog): Promise<ILog> {
        return this.logrepository.createLog(logData);
    }

    async getChallengeLogs(challengeId: string): Promise<ILog[]>{
        return this.logrepository.getChallengeLogs(challengeId);
    }

    async getUserLogs(userId: string): Promise<ILog[]>{
        return this.logrepository.getUserLogs(userId);
    }

    async getChallengeUserLogs(challengeId: string, userId: string): Promise<ILog[]>{
        return this.logrepository.getChallengeUserLogs(challengeId, userId);
    }

    async getLogById(logId: string): Promise<ILog | null>{
        return this.logrepository.getLogById(logId);
    }

    async updateLogById(logId: string, updateData: any): Promise<ILog | null>{
        return this.logrepository.updateLogById(logId, updateData);
    }
}

export default LogService;