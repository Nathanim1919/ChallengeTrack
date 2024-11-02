import { ILog } from "../interfaces/ILogs";
import { Log } from "../models/log.model";

export class LogRepository {
  constructor() {}

  async createLog(logData: ILog): Promise<ILog | null> {
    console.log("Log Data:", logData);

    const log = await Log.findOneAndUpdate(
        {
            user: logData.user.toString(),
            challenge: logData.challenge.toString(),
            days: logData.days
        },
        {
            completed: logData.completed,
            details: logData.details
        },
        { new: true, upsert: true }
    );

    return log;
}


  async findLogForTheDay(
    day: number,
    userId: string,
    challengeId: string
  ): Promise<ILog | null> {
    return Log.findOne({
      days: day,
      user: userId,
      challenge: challengeId,
      completed: true,
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
    return Log.find({ challenge: challengeId, user: userId })
    .sort({ days: 1 })
    .exec();
  }


  async getLogById(logId: string): Promise<ILog | null> {
    return Log.findById(logId).exec();
  }

  async updateLogById(logId: string, updateData: any): Promise<ILog | null> {
    return Log.findByIdAndUpdate(logId, updateData, { new: true }).exec();
  }

  async deleteAllUserLogsWhenChallengeIsDeletedOrLeft(challengeId: string, userId: string): Promise<void> {
    await Log.deleteMany({ challenge: challengeId, user: userId }).exec();
  }

  async deleteAllChallengeLogs(challengeId: string): Promise<void> {
   await Log.deleteMany({ challenge: challengeId }).exec();
  }
}
