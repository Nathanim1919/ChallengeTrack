import {IGlobalLeaderboard, ILeaderboard} from "../interfaces/ILeaderBoard";
import {Leaderboard} from "../models/leaderboard.model";
import {GlobalLeaderboard} from "../models/globalLeaderBoard.model";
import { ClientSession } from "mongoose";

class LeaderboardRepository {
    async createLeaderboard(leaderboardData: ILeaderboard, session?: ClientSession): Promise<ILeaderboard> {
        if (session) {
            return await new Leaderboard(leaderboardData).save({session});
        }
        
        return await new Leaderboard(leaderboardData).save();
    }

    async createGlobalLeaderboard(globalLeaderBoardDate: IGlobalLeaderboard): Promise<IGlobalLeaderboard> {
       return await GlobalLeaderboard.create(globalLeaderBoardDate);
    }

    async addParticipantToLeaderboard(challengeId: string, userId: string): Promise<ILeaderboard | null> {
        return await Leaderboard.findByIdAndUpdate(
            challengeId,
            {
                $addToSet: {
                    rankings: {
                        userId,
                        score: 0
                    }
                }
            },
            { new: true, upsert: true } // Use upsert to create if not exists
        ).exec();
    }
    

    async removeParticipantFromLeaderboard(challengeId: string, userId: string): Promise<ILeaderboard | null> {
        return await Leaderboard.findByIdAndUpdate(challengeId, {
            $pull: {
                rankings: {
                    userId
                }
            }
        }, {new: true}).exec();
    }

    async getLeaderboardById(leaderboardId: string): Promise<ILeaderboard | null> {
        return await Leaderboard.findById(leaderboardId).exec();
    }

    async getGlobalLeaderboard(): Promise<IGlobalLeaderboard[] | null> {
        const leaderboardEntries = await GlobalLeaderboard.find({})
                                .populate('userId')
                                .sort({ totalPoints: -1 })
                                .exec();

        return leaderboardEntries.map((entry, index) => ({
            userId: entry.userId,
            totalPoints: entry.totalPoints,
            rank: index + 1,
        }))
    }

    async getLeaderBoardByChallengeId(challengeId: string): Promise<ILeaderboard | null> {
        return await Leaderboard.findOne({challengeId})
            .sort({score: -1})
            .populate({
                path:'rankings.userId',
                model: 'User',
                select: 'username email'
            })
            .exec();

    }
}



export default LeaderboardRepository;
