import {IChallenge} from "../interfaces/IChallenge";
import {ChallengeRepository} from "../repositories/challenge.repository";
import mongoose from "mongoose";
import {IUser} from "../interfaces/IUser";
import {UserService} from "./user.service";
import LeaderBoardService from "./leaderBoard.service";
import {RewardType} from "../utils/enum.utils";
import {RankEntry} from "../interfaces/ILeaderBoard";
import {ObjectId} from "bson";

class ChallengeService {
    constructor(
        private challengeRepository: ChallengeRepository,
        private userService: UserService,
        private leaderBoard: LeaderBoardService
    ) {}

    async createChallenge(challengeData: IChallenge): Promise<IChallenge> {
        try {
            const createdChallenge = await this.challengeRepository.createChallenge(challengeData);

            if (!createdChallenge) {
                throw new Error('Failed to create challenge');
            }

            // Initialize the leaderboard with the creator's entry
            const leaderBoard = await this.leaderBoard.createChallengeSpecificLeaderboard({
                challengeId: createdChallenge._id,
                rankings: [
                    {
                        userId: createdChallenge.createdBy.toString(),
                        point: 0
                    } as RankEntry
                ]
            });

            // Add leaderboard reference to the challenge
            createdChallenge.leaderboard = leaderBoard._id;

            // update the challenge with the leaderboard reference
            await this.challengeRepository.updateChallenge(createdChallenge._id.toString(), createdChallenge);
            return createdChallenge;
        } catch (error) {
            throw new Error('Failed to create challenge');
        }
    }


    async updateChallenge(id: string, updateData: Partial<IChallenge>): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid challenge ID');
        }
        try {
            return await this.challengeRepository.updateChallenge(id, updateData);
        } catch (error) {
            throw new Error('Failed to update challenge');
        }
    }

    async deleteChallenge(id: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid challenge ID');
        }
        try {
            return await this.challengeRepository.deleteChallenge(id);
        } catch (error) {
            throw new Error('Failed to delete challenge');
        }
    }

    async searchChallenges(filter: any): Promise<IChallenge[] | []> {
        try {
            return await this.challengeRepository.searchChallenges(filter);
        } catch (error) {
            throw new Error('Failed to search challenges');
        }
    }

    async findChallengeById(challengeId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        try {
            return this.challengeRepository.findChallengeById(challengeId);
        } catch (error) {
            throw new Error('Failed to find challenge');
        }
    }

    async addParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID format');
        }
        return this.challengeRepository.addParticipant(challengeId, userId);
    }

    async removeParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID format');
        }
        return this.challengeRepository.removeParticipant(challengeId, userId);
    }

    async markChallengeAsCompleted(challengeId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }

        const challenge = await this.challengeRepository.findChallengeById(challengeId);
        if (!challenge) {
            throw new Error('Challenge not found');
        }

        // Reward all participants for completing the challenge
        for (const participant of challenge.participants) {
            await this.userService.rewardUserForCompletingChallenge(participant);
        }

        // Fetch leaderboard
        const leaderBoard = await this.leaderBoard.getLeaderBoardByChallengeId(challengeId);
        if (!leaderBoard) {
            throw new Error('Leaderboard not found');
        }

        // Reward type for top 3 participants
        const TOP_3_REWARD_TYPES = [RewardType.FIRST_PLACE, RewardType.SECOND_PLACE, RewardType.THIRD_PLACE];

        // Reward top 3 participants
        for (const topRanking of leaderBoard.rankings.slice(0, 3)) {
            await this.userService.rewardUserForTopPlacement(topRanking.userId, TOP_3_REWARD_TYPES[leaderBoard.rankings.indexOf(topRanking)]);
        }

        // Mark the challenge as completed
        return this.challengeRepository.markChallengeAsCompleted(challengeId);
    }


    async getChallengeParticipants(challengeId: string): Promise<IUser[] | []> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        return this.challengeRepository.getChallengeParticipants(challengeId);
    }

    async saveDailyLogChallengeProgress(challengeId: string, userId: string, logs: string[], images: string[], day: number): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID format');
        }

        const challenge = await this.challengeRepository.findChallengeById(challengeId);
        if (!challenge) {
            throw new Error('Challenge not found');
        }

        const participant = challenge.participants.find(participant => participant === userId);
        if (!participant) {
            throw new Error('User is not a participant of this challenge');
        }

        await this.userService.rewardUserForDailyChallenge(userId)
        return this.challengeRepository.saveLogChallengeProgress(challengeId, userId, logs, images, day);
    }
}


export default ChallengeService;
