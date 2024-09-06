import LeaderboardRepository from "../repositories/leaderboard.repository";
import {ILeaderboard} from "../interfaces/ILeaderBoard";

class LeaderBoardService {
    constructor(private leaderBoardRepository: LeaderboardRepository) {
    }

    async createChallengeSpecificLeaderboard(leaderboardData: ILeaderboard) {
        return await this.leaderBoardRepository.createLeaderboard(leaderboardData);
    }

    async createGlobalLeaderboard() {
        return await this.leaderBoardRepository.createGlobalLeaderboard();
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
