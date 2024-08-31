import {IChallenge} from "../interfaces/IChallenge";
import {Challenge} from "../models/challenge.mode";
import {challengeStatus} from "../utils/enum.utils";
import {IUser} from "../interfaces/IUser";
import mongoose from "mongoose";
import {User} from "../models/user.model";

export class ChallengeRepository {
    async createChallenge(challengeData: IChallenge): Promise<IChallenge> {
        const challenge = new Challenge(challengeData);
        return challenge.save();
    }

    async updateChallenge(id: string, updateData: Partial<IChallenge>): Promise<IChallenge | null> {
        return Challenge.findByIdAndUpdate(id, updateData, {new: true}).exec();
    }

    async deleteChallenge(id: string): Promise<IChallenge | null> {
        return Challenge.findByIdAndDelete(id).exec();
    }


    async searchChallenges(filter: any): Promise<IChallenge[] | []> {
        return await Challenge.find(filter).exec();
    }

    async findChallengeById(challengeId: string): Promise<IChallenge | null> {
        return Challenge.findById(challengeId).exec();
    }

    async addParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        return Challenge.findByIdAndUpdate(challengeId, {
            $addToSet: {participants: userId}
        }, {new: true}).exec();
    }


    async removeParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        return Challenge.findByIdAndUpdate(challengeId, {
            $pull: {participants: userId}
        }, {new: true}).exec();
    }


    async markChallengeAsCompleted(challengeId: string): Promise<IChallenge | null> {
        return Challenge.findByIdAndUpdate(challengeId, {
            $addToSet: {
                status: challengeStatus.COMPLETED
            }
        }, {new: true}).exec();
    }

    async getChallengeParticipants(challengeId: string): Promise<IUser[] | []> {
        const challenge = await Challenge.findById(challengeId)
            .populate('participants')
            .exec();
        return challenge?.participants as IUser[] | [];
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
