import LeaderboardRepository from "../repositories/leaderboard.repository";
import {IGlobalLeaderboard, ILeaderboard} from "../interfaces/ILeaderBoard";
import { ClientSession } from "mongoose";

class LeaderBoardService {
    constructor(private leaderBoardRepository: LeaderboardRepository) {
    }

    async createChallengeSpecificLeaderboard(leaderboardData: ILeaderboard, session?: ClientSession) {
        if (session) {
            return await this.leaderBoardRepository.createLeaderboard(leaderboardData, session);
        }
        return await this.leaderBoardRepository.createLeaderboard(leaderboardData);
    }

    async createGlobalLeaderboard(leaderboardData:IGlobalLeaderboard) {
        return await this.leaderBoardRepository.createGlobalLeaderboard(leaderboardData);
    }

    async addParticipantToLeaderboard(challengeId: string, userId: string) {
        return await this.leaderBoardRepository.addParticipantToLeaderboard(challengeId, userId);
    };

    async removeParticipantFromLeaderboard(challengeId: string, userId: string) {
        return await this.leaderBoardRepository.removeParticipantFromLeaderboard(challengeId, userId);
    }

    async getLeaderboardById(leaderboardId: string) {
        return await this.leaderBoardRepository.getLeaderboardById(leaderboardId);
    }

    async getGlobalLeaderboard() {
        return await this.leaderBoardRepository.getGlobalLeaderboard();
    }

    async getLeaderBoardByChallengeId(challengeId: string) {
        return await this.leaderBoardRepository.getLeaderBoardByChallengeId(challengeId);
    }




}


export default LeaderBoardService;
