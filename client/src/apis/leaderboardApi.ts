import { ApiResponse } from "../interfaces/ICommon";
import { ILeaderboard } from "../interfaces/ILeaderBoard";
import apiConfig from "./apiConfig.ts";


const getLeaderboardById = async (leaderboardId: string): Promise<ApiResponse<ILeaderboard>> => {
    const response = await apiConfig.get(`/leaderboard/${leaderboardId}`);
    return response.data;
}


const getGlobalLeaderboard = async (): Promise<ApiResponse<ILeaderboard>> => {
    const response = await apiConfig.get("/leaderboard/global");
    return response.data;
}


const getLeaderBoardByChallengeId = async (challengeId: string): Promise<ApiResponse<ILeaderboard>> => {
    const response = await apiConfig.get(`/leaderboard/challenge/${challengeId}`);
    return response.data;
}



export default {
    getLeaderboardById,
    getGlobalLeaderboard,
    getLeaderBoardByChallengeId
}