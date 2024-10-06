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

    async getLeaderboardById(leaderboardId: string): Promise<ILeaderboard | null> {
        return await Leaderboard.findById(leaderboardId).exec();
    }

    async getGlobalLeaderboard(): Promise<IGlobalLeaderboard | null> {
        return await GlobalLeaderboard.findOne().exec();
    }

    async getLeaderBoardByChallengeId(challengeId: string): Promise<ILeaderboard | null> {
        return await Leaderboard.findOne({challengeId}).sort({score: -1}).exec();
    }
}



export default LeaderboardRepository;
