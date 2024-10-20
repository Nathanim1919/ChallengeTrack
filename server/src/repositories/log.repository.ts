import { ILog } from "../interfaces/ILogs";
import { Log } from "../models/log.model";

export class LogRepository {
    constructor() {
    }

    async createLog(logData: ILog): Promise<ILog> {
        const log = new Log(logData);
        return log.save();
    }

    async getChallengeLogs(challengeId: string): Promise<ILog[]> {
        return Log.find({ challenge: challengeId }).exec();
    }

    async getUserLogs(userId: string): Promise<ILog[]> {
        return Log.find({ user: userId }).exec();
    }

    async getLogById(logId: string): Promise<ILog | null> {
        return Log.findById(logId).exec();
    }

    async updateLogById(logId: string, updateData: any): Promise<ILog | null> {
        return Log.findByIdAndUpdate(logId, updateData, { new: true }).exec();
    }
}
