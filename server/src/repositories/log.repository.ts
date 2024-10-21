import { ILog } from "../interfaces/ILogs";
import { Log } from "../models/log.model";

export class LogRepository {
  constructor() {}

  async createLog(logData: ILog): Promise<ILog> {
    const log = new Log(logData);
    return log.save();
  }

  async findLogForTheDay(
    day: number,
    userId: string,
    challengeId: string
  ): Promise<ILog | null> {
    return Log.findOne({
      days: day,
      completed: true,
      user: userId,
      challenge: challengeId,
    }).exec();
  }

  async getChallengeLogs(challengeId: string): Promise<ILog[]> {
    return Log.find({ challenge: challengeId }).exec();
  }

  async getUserLogs(userId: string): Promise<ILog[]> {
    return Log.find({ user: userId }).exec();
  }

  async getChallengeUserLogs(
    challengeId: string,
    userId: string
  ): Promise<ILog[]> {
    return Log.find({ challenge: challengeId, user: userId }).exec();
  }


  async getLogById(logId: string): Promise<ILog | null> {
    return Log.findById(logId).exec();
  }

  async updateLogById(logId: string, updateData: any): Promise<ILog | null> {
    return Log.findByIdAndUpdate(logId, updateData, { new: true }).exec();
  }
}
