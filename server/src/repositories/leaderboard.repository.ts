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

    async createGlobalLeaderboard(): Promise<IGlobalLeaderboard> {
       return await GlobalLeaderboard.create({});
    }

    async addParticipantToLeaderboard(challengeId: string, userId: string): Promise<ILeaderboard | null> {
        return await Leaderboard.findByIdAndUpdate(challengeId, {
            $push: {
                rankings: {
                    userId
                }
            }
        }, {new: true}).exec();
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

    async getGlobalLeaderboard(): Promise<IGlobalLeaderboard | null> {
        return await GlobalLeaderboard.findOne().exec();
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
