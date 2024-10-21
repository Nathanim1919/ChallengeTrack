import { IChallenge } from "../interfaces/IChallenge";
import { Challenge } from "../models/challenge.mode";
import { challengeStatus } from "../utils/enum.utils";
import { IUser } from "../interfaces/IUser";
import mongoose, { ClientSession } from "mongoose";
import { User } from "../models/user.model";
import { ILog } from "../interfaces/ILogs";

export class ChallengeRepository {
  async createChallenge(
    challengeData: IChallenge,
    session?: ClientSession
  ): Promise<IChallenge> {
    const challenge = new Challenge(challengeData);
    if (session) {
      return challenge.save({ session });
    }
    return challenge.save();
  }

  async updateChallenge(
    id: string,
    updateData: Partial<IChallenge>,
    session?: ClientSession
  ): Promise<IChallenge | null> {
    if (session) {
      return Challenge.findByIdAndUpdate(id, updateData, {
        new: true,
        session,
      }).exec();
    }
    return Challenge.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async changeChallengeStatus(
    id: string,
    status: string
  ): Promise<IChallenge | null> {
    return Challenge.findByIdAndUpdate(
      id,
      {
        $set: {
          status: status,
        },
      },
      { new: true }
    ).exec();
  }

  async deleteChallenge(id: string): Promise<IChallenge | null> {
    return Challenge.findByIdAndDelete(id).exec();
  }

  async searchChallenges(filter: any): Promise<IChallenge[] | []> {
    return await Challenge.find(filter)
      .sort({ createdAt: -1 })
      .populate("createdBy")
      .exec();
  }

  async getAllChallenges(
    userId: string,
    page: number,
    limit: number
  ): Promise<IChallenge[] | []> {
    const skip = (page - 1) * limit;
    return Challenge.find({ createdBy: { $ne: userId } })
      .skip(skip)
      .limit(limit)
      .exec();
  }

  async findChallengeById(challengeId: string): Promise<IChallenge | null> {
    return Challenge.findById(challengeId).populate("createdBy").exec();
  }

  async getPopularChallenge(userId: string): Promise<IChallenge[] | []> {
    return Challenge.aggregate([
      {
        $match: {
          participants: { $ne: userId, }, // Exclude challenges where the user is already a participant
          status: { $ne: "COMPLETED" },                 // Exclude completed challenges
          createdBy: { $ne: userId },                   // Exclude challenges created by the user
        },
      },
      {
        $addFields: {
          participantCount: { $size: "$participants" }, // Add a field to count the number of participants
        },
      },
      {
        $sort: { participantCount: -1 }, // Sort by the number of participants in descending order
      },
      {
        $limit: 1, // Return the challenge with the highest participant count
      },
      {
        $lookup: { // Populate the 'createdBy' field with data from the User collection
          from: 'users', // Name of the collection that holds the user data
          localField: 'createdBy', // Field in the Challenge model that stores the user reference (userId)
          foreignField: '_id', // Field in the User model that matches the userId (typically _id)
          as: 'createdBy', // The field where the joined data will be stored (replaces 'createdBy' with the full user data)
        },
      },
      {
        $unwind: '$createdBy', // Unwind the array to get the populated 'createdBy' field as an object instead of an array
      },
    ]).exec();
}


  async addParticipant(
    challengeId: string,
    userId: string
  ): Promise<IChallenge | null> {
    return Challenge.findByIdAndUpdate(
      challengeId,
      {
        $addToSet: { participants: userId },
      },
      { new: true }
    ).exec();
  }

  async removeParticipant(
    challengeId: string,
    userId: string
  ): Promise<IChallenge | null> {
    return Challenge.findByIdAndUpdate(
      challengeId,
      {
        $pull: { participants: userId },
      },
      { new: true }
    ).exec();
  }

  async markChallengeAsCompleted(
    challengeId: string
  ): Promise<IChallenge | null> {
    return Challenge.findByIdAndUpdate(
      challengeId,
      {
        $set: {
          status: challengeStatus.COMPLETED,
        },
      },
      { new: true }
    ).exec();
  }

  async getChallengeParticipants(challengeId: string): Promise<IUser[] | []> {
    const challenge = await Challenge.findById(challengeId)
      .populate("participants")
      .exec();
    return challenge?.participants as IUser[] | [];
  }

  async checkIfUserIsParticipant(
    challengeId: string,
    userId: string
  ): Promise<boolean> {
    const challenge = await Challenge.findById(challengeId, {
      participants: { $elemMatch: { $eq: userId } },
    }).exec();

    return (challenge?.participants ?? []).length > 0;
  }

  // TODO: Implement the following methods
  // distributeRewards(challengeId: ObjectId): Promise<IRewardDistributionResult>;
  // addChallengeStage(challengeId: ObjectId, stage: IChallengeStage): Promise<IChallenge>;
  // updateChallengeStage(challengeId: ObjectId, stageId: ObjectId, stageData: Partial<IChallengeStage>): Promise<IChallenge>;
  // removeChallengeStage(challengeId: ObjectId, stageId: ObjectId): Promise<IChallenge>;
  // searchChallenges(keyword: string, filters?: ChallengeSearchFilters): Promise<IChallenge[]>;
  // recommendChallengesForUser(userId: ObjectId): Promise<IChallenge[]>;
  // getChallengeAnalytics(challengeId: ObjectId): Promise<IChallengeAnalytics>;
  // getChallengeCompletionAnalytics(challengeId: ObjectId): Promise<IChallengeCompletionAnalytics>;
  // getChallengeParticipantsAnalytics(challengeId: ObjectId): Promise<IChallengeParticipantsAnalytics>;
  // getChallengeStagesAnalytics(challengeId: ObjectId): Promise<IChallengeStagesAnalytics>;
  // flagChallengeForReview(challengeId: ObjectId, reason: string): Promise<void>;
  // banChallenge(challengeId: ObjectId): Promise<IChallenge>;
  // unbanChallenge(challengeId: ObjectId): Promise<IChallenge>;
  // translateChallengeContent(challengeId: ObjectId, language: string): Promise<IChallengeTranslation>;
  // getChallengeTranslations(challengeId: ObjectId): Promise<IChallengeTranslation[]>;
}
