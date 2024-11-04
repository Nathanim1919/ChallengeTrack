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

  async getChallengesUserCreatedOrParticipated(
    userId: string
  ): Promise<IChallenge[] | []> {
    return Challenge.find({
      $or: [{ createdBy: userId }, { participants: userId }],
    })
    .populate("createdBy")
    .exec();
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
    return (
      Challenge.find({ createdBy: { $ne: userId } })
        // .skip(skip)
        // .limit(limit)
        .populate("createdBy")
        .exec()
    );
  }

  async findChallengeById(challengeId: string): Promise<IChallenge | null> {
    return Challenge.findById(challengeId).populate("createdBy").exec();
  }

  async getPopularChallengeOvervierForUnsignedUser(): Promise<IChallenge[] | null> {
    return Challenge.aggregate([
      {
        $match: {
          status: { $ne: "COMPLETED" }, // Exclude completed challenges
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
        $limit: 4, // Return the challenge with the highest participant count
      },
      {
        $lookup: {
          // Populate the 'createdBy' field with data from the User collection
          from: "users", // Collection to join
          localField: "createdBy", // Field in the Challenge model (still holds user ID)
          foreignField: "_id", // Matching field in the User collection (user ID)
          as: "createdBy", // Output the joined data in the 'createdBy' field
        },
      },
      {
        $unwind: "$createdBy", // Unwind the array to get 'createdBy' as an object instead of an array
      },
    ]).exec();
  }

  async getPopularChallenge(userId: string): Promise<IChallenge[] | []> {
    return Challenge.aggregate([
      {
        $match: {
          participants: { $nin: [userId] }, // Exclude challenges where the user is a participant
          status: { $ne: "COMPLETED" }, // Exclude completed challenges
          createdBy: { $ne: userId }, // Exclude challenges created by the user (check the ID before lookup)
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
        $lookup: {
          // Populate the 'createdBy' field with data from the User collection
          from: "users", // Collection to join
          localField: "createdBy", // Field in the Challenge model (still holds user ID)
          foreignField: "_id", // Matching field in the User collection (user ID)
          as: "createdBy", // Output the joined data in the 'createdBy' field
        },
      },
      {
        $unwind: "$createdBy", // Unwind the array to get 'createdBy' as an object instead of an array
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
        $inc: { totalParticipants: 1 }, // Use $inc to increment totalParticipants
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
        $inc: { totalParticipants: -1 }, // Use $inc to decrement totalParticipants
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
