import {IChallenge} from "../interfaces/IChallenge";
import {ChallengeRepository} from "../repositories/challenge.repository";
import {IUser} from "../interfaces/IUser";
import {UserService} from "./user.service";
import LeaderBoardService from "./leaderBoard.service";
import {challengeStatus, RewardType} from "../utils/enum.utils";
import {RankEntry} from "../interfaces/ILeaderBoard";
import mongoose, { startSession, Types } from 'mongoose';
import { CategoryService } from "./category.service";
import {Log} from "../models/log.model";
import { RewardService } from "./reward.service";
import { ILog } from "../interfaces/ILogs";
import { LogRepository } from "../repositories/log.repository";
import { initializeChallengeLogs } from "../utils/helperFunctions.utils";
import LogService from "./log.service";

class ChallengeService {

    constructor(
        private challengeRepository: ChallengeRepository,
        private userService: UserService,
        private leaderBoard: LeaderBoardService,
        private categoryService: CategoryService,
        private logRepository: LogRepository,
        private logService: LogService
    ) {
    }

    async createChallenge(challengeData: IChallenge, creatorId: string): Promise<IChallenge> {
    
        try {
            let { duration, startDate, categorie } = challengeData;

            // Convert startDate to a Date object
            startDate = new Date(challengeData.startDate);

            // Calculate the end date
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + Number(duration));

            const user = await this.userService.getUserById(creatorId);

            if (!user) {
                throw new Error('User not found');
            }

            // Include createdBy in the initial challenge creation
            const createdChallenge = await this.challengeRepository.createChallenge({
                ...challengeData,
                endDate,
                createdBy: user._id,
                categorie: categorie,
                totalParticipants: 1,
                participantsOnTrack: 1,
                participants: [creatorId],
            });



            if (!createdChallenge) {
                throw new Error('Failed to create challenge');
            }

            // Initialize the leaderboard with the creator's entry
            const leaderBoard = await this.leaderBoard.createChallengeSpecificLeaderboard({
                challengeId: createdChallenge._id,
                rankings: [
                    {
                        userId: creatorId,
                        point: 0
                    } as RankEntry
                ]
            });


            // Add leaderboard reference to the challenge
            createdChallenge.leaderboard = leaderBoard._id;
            // Add creator to the participants list


            // Add the challenge to the category
            await this.categoryService.addChallenge(challengeData.categorie, createdChallenge._id.toString());

            // Update the challenge with the leaderboard reference
            await this.challengeRepository.updateChallenge(createdChallenge._id.toString(), createdChallenge);

            await initializeChallengeLogs(creatorId, createdChallenge._id.toString(), createdChallenge.duration);
           

            // await session.commitTransaction();
            // session.endSession();

            if (createdChallenge){
                user.createdChallenges.push(createdChallenge._id);
                user.points = RewardService.reward(RewardType.CREATE_CHALLENGE, user.points);
                await this.userService.updateUser(creatorId, user);
            }

            return createdChallenge;
        } catch (error) {
            console.log("error is: " + error);
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

    async deleteChallenge(id: string, userId: string): Promise<IChallenge | null> {
        try {
            // Check if the user is the owner of the challenge
            const isOwner = await this.checkIfUserIsOwner(id, userId);
            if (!isOwner) {
                throw new Error('User is not the owner of the challenge');
            }

            // remove challenge from category
            const challenge = await this.findChallengeById(id);
            if (!challenge) {
                throw new Error('Challenge not found');
            }

            await this.categoryService.removeChallenge(challenge.categorie, id);

            // delete challenge logs
            await this.logService.deleteAllChallengeLogs(id);

            // remove challenge id from user created challenges
            const user = await this.userService.getUserById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            user.createdChallenges = user.createdChallenges.filter(challenge => challenge.toString() !== id);
            await this.userService.updateUser(userId, user);

            // remove from all participants
            const participants = await this.getChallengeParticipants(id);
            for (const participant of participants) {
                await this.removeParticipant(id, participant._id.toString());
            }

            // delete leaderboard
            await this.leaderBoard.deleteLeaderBoardByChallengeId(id);

            return await this.challengeRepository.deleteChallenge(id);
        } catch (error) {
            console.log("error is: " + error);
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

    async getChallengesUserCreatedOrParticipated(userId: string): Promise<IChallenge[] | []> {
        try {
            return await this.challengeRepository.getChallengesUserCreatedOrParticipated(userId);
        } catch (error) {
            throw new Error('Failed to search challenges');
        }
    }

    async getMyChallenges(userId: string): Promise<IChallenge[] | []> {
        try {
            return await this.challengeRepository.searchChallenges({
                createdBy: userId,
            });
        } catch (error) {
            throw new Error('Failed to search challenges');
        }
    }

    async getAllChallenges(userId: string, page:number, limit: number): Promise<IChallenge[] | []> {
        try {
            return await this.challengeRepository.getAllChallenges(userId, page, limit);
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
            console.log("error is: " + error);
            throw new Error('Failed to check if user is allowed to join challenge');
        }
    }

    // async setChallengeReadyToStart(challengeId: string): Promise<IChallenge | null> {
    //     try {
    //         const isMaxParticipantsReached = await this.isMaxParticipantsReached(challengeId);
    //         const isMinParticipantsReached = await this.isMinParticipantsReached(challengeId);

    //         if (isMaxParticipantsReached || isMinParticipantsReached){
    //             return this.challengeRepository.changeChallengeStatus(challengeId, challengeStatus.READY);
    //         }
    //         throw new Error('Minimum participants not reached');
    //     } catch (error) {
    //         throw new Error('Failed to set challenge ready to start');
    //     }
    // }

    // async isMaxParticipantsReached(challengeId: string): Promise<boolean> {
    //     try {
    //         const challenge = await this.challengeRepository.findChallengeById(challengeId);
    //         if (!challenge) {
    //             throw new Error('Challenge not found');
    //         }
    //         return challenge.participants.length >= challenge.rules?.maxParticipants;
    //     } catch (error) {
    //         throw new Error('Failed to check if max participants reached');
    //     }
    // }

    // async isMinParticipantsReached(challengeId: string): Promise<boolean> {
    //     try {
    //         const challenge = await this.challengeRepository.findChallengeById(challengeId);
    //         if (!challenge) {
    //             throw new Error('Challenge not found');
    //         }
    //         return challenge.participants.length >= challenge.rules?.minParticipants;
    //     } catch (error) {
    //         throw new Error('Failed to check if min participants reached');
    //     }
    // }

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

    async checkIfUserIsOwner(challengeId: string, userId: string): Promise<boolean> {
        try {
            const challenge = await this.challengeRepository.findChallengeById(challengeId);
            if (!challenge) {
                throw new Error('Challenge not found');
            }
            return challenge.createdBy._id.toString() === userId;
        } catch (error) {
            throw new Error('Failed to check if user is owner of the challenge');
        }
    }

    async addParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        try {
            const isParticipant = await this.isUserAllowedToJoinChallenge(challengeId, userId);

            if (isParticipant) {
                throw new Error('User is already a participant of this challenge');
            }
            const addToLeaderboard = await this.leaderBoard.addParticipantToLeaderboard(challengeId, userId);

            if (!addToLeaderboard) {
                throw new Error('Failed to add participant to leaderboard');
            }

            const user = await this.userService.getUserById(userId);
            if (!user) {
                throw new Error('User not found');
            }


            user.participatedChallenges.push(new mongoose.Types.ObjectId(challengeId));
            user.points = RewardService.reward(RewardType.JOIN_CHALLENGE, user?.points??0);

            await this.userService.updateUser(userId, user);

            const updatedChallenge = await this.challengeRepository.addParticipant(challengeId, userId);

            if (!updatedChallenge) {
                throw new Error('Failed to add participant to challenge');
            }

            await initializeChallengeLogs(userId, challengeId, updatedChallenge.duration);

            return updatedChallenge;
        } catch (error) {
            console.log("error is: " + error);
            throw new Error('Failed to add participant to challenge');
        }
    }

    async removeParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        try {
            const isParticipant = await this.isUserAllowedToJoinChallenge(challengeId, userId);

            if (!isParticipant) {
                throw new Error('User is not a participant of this challenge');
            }
            await this.leaderBoard.removeParticipantFromLeaderboard(challengeId, userId);
            const removeParticipantFromChallenge = await this.challengeRepository.removeParticipant(challengeId, userId);

            if (!removeParticipantFromChallenge) {
                throw new Error('Failed to remove participant from challenge');
            }

            const user = await this.userService.getUserById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            user.participatedChallenges = user.participatedChallenges.filter(challenge => challenge.toString() !== challengeId);
            // user.points = RewardService.reward(RewardType.LEAVE_CHALLENGE, user?.points??0);

            await this.userService.updateUser(userId, user);
          

            await this.logRepository.deleteAllUserLogsWhenChallengeIsDeletedOrLeft(challengeId, userId);

            return removeParticipantFromChallenge;
        } catch (error) {
            console.log("error is: " + error);
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

    async getChallengeLogsForUser(challengeId: string, userId: string): Promise<ILog[] | []> {
        try {
            return this.logRepository.getChallengeUserLogs(challengeId, userId);
        } catch (error) {
            throw new Error('Failed to get challenge logs for user');
        }
    }

    async getPopularChallenge(userId: string): Promise<IChallenge[] | []> {
        try {
            return this.challengeRepository.getPopularChallenge(userId);
        } catch (error) {
            throw new Error('Failed to get popular challenge');
        }
    }


    async getPopularChallengeOvervierForUnsignedUser(): Promise<IChallenge[] | null> {
        try {
            return this.challengeRepository.getPopularChallengeOvervierForUnsignedUser();
        } catch (error) {
            throw new Error('Failed to get popular challenge');
        }
    }

    async saveDailyLogChallengeProgress(challengeId: string, userId: string, logs: string): Promise<IChallenge | null> {
        try {
           
            const challenge = await this.challengeRepository.findChallengeById(challengeId);
            if (!challenge) {
                throw new Error('Challenge not found');
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


            // if (challenge.status !== "ONGOING") {
            //     throw new Error('Challenge is not ongoing');
            // }

            // check if challenge is ongoing or not ended
            // if (challenge.status !== "ONGOING") {
            //     throw new Error('Challenge is not ongoing');
            // }

            if (diffDays > challenge.duration) {
                throw new Error('Challenge has ended');
            }

            const createLog = await this.logRepository.createLog({
                details: logs,
                days:diffDays,
                challenge: new Types.ObjectId(challengeId),
                user: new Types.ObjectId(userId),
                completed: true
            });

            if (createLog) {

                challenge.logs.push(new Types.ObjectId(createLog._id));

                // Check if the user has already logged for the day
                const user = await this.userService.getUserById(userId);
                if (!user) {
                    throw new Error('User not found');
                }

                const today = new Date();
                const lastLog = user.logs[user.logs.length - 1];
                // const lastLogDate = new Date(lastLog.createdAt);

                user.logs.push(new Types.ObjectId(createLog._id));


                await this.userService.rewardUserForDailyChallenge(userId);
                await this.userService.updateUser(userId, user);
                await this.challengeRepository.updateChallenge(challengeId, challenge);

                return challenge;


            } else {
                throw new Error('Failed to create log');
            }
        } catch (error) {
            console.log("error is: " + error);
            throw new Error('Failed to save daily log challenge progress');
        }
    }

    async checkIfUserIsParticipant(challengeId: string, userId: string): Promise<boolean> {
        try {
            return this.challengeRepository.checkIfUserIsParticipant(challengeId, userId);
        } catch (error) {
            throw new Error('Failed to check if user is participant');
        }
    }

    async addDailyLog(userId: string, challengeId: string, content: string) {
        try {
            const createLog = await Log.create({details:content});
            await createLog.save();

            if (!createLog) {
                throw new Error('Failed to create log');
            }

            const challenge = await this.challengeRepository.findChallengeById(challengeId);
            if (!challenge) {
                throw new Error('Challenge not found');
            }

            challenge.logs.push(new Types.ObjectId(createLog._id));

            await this.challengeRepository.updateChallenge(challengeId, challenge);


            const user = await this.userService.getUserById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            user.logs.push(new Types.ObjectId(createLog._id));
            await this.userService.updateUser(userId, user);

        } catch (error) {
            console.error('Error adding daily log:', error);
            throw error;
        }
    }
}


// Export an instance of the class
export default ChallengeService;
