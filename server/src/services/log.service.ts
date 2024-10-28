import { Types } from "mongoose";
import { ILog } from "../interfaces/ILogs";
import { ChallengeRepository } from "../repositories/challenge.repository";
import { LogRepository } from "../repositories/log.repository";
import { UserService } from "./user.service";

class LogService {
  constructor(
    private  logRepository: LogRepository,
    private challengeRepository: ChallengeRepository,
    private userService: UserService,

  ) {}

  async createLog(
    details: string,
    challengeId: string,
    userId: string
  ): Promise<ILog> {
    try {
      const challenge = await this.challengeRepository.findChallengeById(
        challengeId
      );
      if (!challenge) {
        throw new Error("Challenge not found");
      }

      // const participant = challenge.participants.find(participant => participant === userId);
      // if (!participant) {
      //     throw new Error('User is not a participant of this challenge');
      // }

      const today = new Date();
      const challengeStartDate = new Date(challenge.startDate);
      const diffTime = Math.abs(today.getTime() - challengeStartDate.getTime());

      // change the difference to days
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // check if their is a log for the day
      const log = await this.logRepository.findLogForTheDay(diffDays, userId, challengeId);
      console.log("log is: " + log);
      if (log) {
        throw new Error("You have already logged for the day");
      }

      // if (challenge.status !== "ONGOING") {
      //     throw new Error('Challenge is not ongoing');
      // }

      // check if challenge is ongoing or not ended
      // if (challenge.status !== "ONGOING") {
      //     throw new Error('Challenge is not ongoing');
      // }

      if (diffDays > challenge.duration) {
        throw new Error("Challenge has ended");
      }


      const getLog = await this.logRepository.findLogForTheDay(diffDays, userId, challengeId);

      if (getLog && getLog.completed) {
        throw new Error("You have already logged for the day");
      }

      const createLog = await this.logRepository.createLog({
        details: details,
        days: diffDays,
        challenge: new Types.ObjectId(challengeId),
        user: new Types.ObjectId(userId),
        completed: true,
      });

      console.log("createLog is: " + createLog);

      if (createLog?.completed) {
        challenge.logs.push(new Types.ObjectId(createLog._id));

        // Check if the user has already logged for the day
        const user = await this.userService.getUserById(userId);
        if (!user) {
          throw new Error("User not found");
        }

        user.logs.push(new Types.ObjectId(createLog._id));

        await this.userService.rewardUserForDailyChallenge(userId);
        await this.userService.updateUser(userId, user);
        await this.challengeRepository.updateChallenge(challengeId, challenge);

        return createLog;
      } else {
        throw new Error("Failed to create log");
      }
    } catch (error) {
      console.log("error is: " + error);
      throw new Error("Failed to save daily log challenge progress");
    }
  }

  async getChallengeLogs(challengeId: string): Promise<ILog[]> {
    return this.logRepository.getChallengeLogs(challengeId);
  }

  async getUserLogs(userId: string): Promise<ILog[]> {
    return this.logRepository.getUserLogs(userId);
  }


  // lets return todays number of days, to display users which day of the challenge they are in
  async getTodayExepctedLog(userId: string, challengeId: string): Promise<ILog | null> {
    const challenge = await this.challengeRepository.findChallengeById(challengeId);
    if (!challenge) {
      throw new Error("Challenge not found");
    }

    const today = new Date();
    const challengeStartDate = new Date(challenge.startDate);
    const diffTime = Math.abs(today.getTime() - challengeStartDate.getTime());

    // change the difference to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // check if their is a log for the day
    const log = await this.logRepository.findLogForTheDay(diffDays, userId, challengeId);
    if (log) {
      return log;
    } else {
      return null;
    }
  }

  async getChallengeUserLogs(
    challengeId: string,
    userId: string
  ): Promise<ILog[]> {
    return this.logRepository.getChallengeUserLogs(challengeId, userId);
  }

  async getLogById(logId: string): Promise<ILog | null> {
    return this.logRepository.getLogById(logId);
  }

  async updateLogById(logId: string, updateData: any): Promise<ILog | null> {
    return this.logRepository.updateLogById(logId, updateData);
  }
}

export default LogService;
