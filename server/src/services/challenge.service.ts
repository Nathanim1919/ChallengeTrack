import {IChallenge} from "../interfaces/IChallenge";
import {ChallengeRepository} from "../repositories/challenge.repository";
import {IUser} from "../interfaces/IUser";
import {UserService} from "./user.service";
import LeaderBoardService from "./leaderBoard.service";
import {challengeStatus, RewardType} from "../utils/enum.utils";
import {RankEntry} from "../interfaces/ILeaderBoard";


class ChallengeService {
    constructor(
        private challengeRepository: ChallengeRepository,
        private userService: UserService,
        private leaderBoard: LeaderBoardService
    ) {
    }

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
        try {
            return await this.challengeRepository.updateChallenge(id, updateData);
        } catch (error) {
            throw new Error('Failed to update challenge');
        }
    }

    async deleteChallenge(id: string): Promise<IChallenge | null> {
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
        try {
            return this.challengeRepository.findChallengeById(challengeId);
        } catch (error) {
            throw new Error('Failed to find challenge');
        }
    }


    async isUserAllowedToJoinChallenge(challengeId: string, userId: string): Promise<boolean | undefined> {
        try {
            const challenge = await this.challengeRepository.findChallengeById(challengeId);
            if (!challenge) {
                throw new Error('Challenge not found');
            }
            return challenge?.participants.includes(userId);
        } catch (error) {
            throw new Error('Failed to check if user is allowed to join challenge');
        }
    }

    async setChallengeReadyToStart(challengeId: string): Promise<IChallenge | null> {
        try {
            const isMaxParticipantsReached = await this.isMaxParticipantsReached(challengeId);
            const isMinParticipantsReached = await this.isMinParticipantsReached(challengeId);

            if (isMaxParticipantsReached || isMinParticipantsReached){
                return this.challengeRepository.changeChallengeStatus(challengeId, challengeStatus.READY);
            }
            throw new Error('Minimum participants not reached');
        } catch (error) {
            throw new Error('Failed to set challenge ready to start');
        }

    }

    async isMaxParticipantsReached(challengeId: string): Promise<boolean> {
        try {
            const challenge = await this.challengeRepository.findChallengeById(challengeId);
            if (!challenge) {
                throw new Error('Challenge not found');
            }
            return challenge.participants.length >= challenge.rules?.maxParticipants;
        } catch (error) {
            throw new Error('Failed to check if max participants reached');
        }
    }

    async isMinParticipantsReached(challengeId: string): Promise<boolean> {
        try {
            const challenge = await this.challengeRepository.findChallengeById(challengeId);
            if (!challenge) {
                throw new Error('Challenge not found');
            }
            return challenge.participants.length >= challenge.rules?.minParticipants;
        } catch (error) {
            throw new Error('Failed to check if min participants reached');
        }
    }

    async isUserParticipant(challengeId: string, userId: string): Promise<boolean> {
        try {
            const challenge = await this.challengeRepository.findChallengeById(challengeId);
            if (!challenge) {
                throw new Error('Challenge not found');
            }
            return challenge.participants.includes(userId);

        } catch (error) {
            throw new Error('Failed to check if user is a participant of the challenge');
        }
    }

    async addParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        try {
            const isParticipant = await this.isUserAllowedToJoinChallenge(challengeId, userId);

            if (!isParticipant) {
                return this.challengeRepository.addParticipant(challengeId, userId);
            }
            throw new Error('User is already a participant of this challenge');
        } catch (error) {
            throw new Error('Failed to add participant to challenge');
        }
    }

    async removeParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        try {
            return this.challengeRepository.removeParticipant(challengeId, userId);
        } catch (error) {
            throw new Error('Failed to remove participant from challenge');
        }
    }

    async markChallengeAsCompleted(challengeId: string): Promise<IChallenge | null> {
        try {
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
        } catch (error) {
            throw new Error('Failed to mark challenge as completed');
        }
    }


    async getChallengeParticipants(challengeId: string): Promise<IUser[] | []> {
        try {
            return this.challengeRepository.getChallengeParticipants(challengeId);
        } catch (error) {
            throw new Error('Failed to get challenge participants');
        }
    }

    async saveDailyLogChallengeProgress(challengeId: string, userId: string, logs: string[], images: string[], day: number): Promise<IChallenge | null> {
        try {
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
        } catch (error) {
            throw new Error('Failed to save daily log challenge progress');
        }
    }
}


// Export an instance of the class
export default ChallengeService;
