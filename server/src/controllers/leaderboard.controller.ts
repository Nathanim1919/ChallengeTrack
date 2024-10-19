import { Request, Response } from "express";
import LeaderBoardService from "../services/leaderBoard.service";
import { ApiResponse } from "../interfaces/ICommon";
import { ILeaderboard } from "../interfaces/ILeaderBoard";
import { formatError, formatResponse } from "../utils/responseFormat";


class LeaderBoardController {
    constructor(private leaderBoardService: LeaderBoardService) {
    }

    async getLeaderboardById(req: Request, res: Response): Promise<Response<ApiResponse<ILeaderboard>>> {
        try {
            const leaderboard = await this.leaderBoardService.getLeaderboardById(req.params.id);
            return res.status(200).json(formatResponse(leaderboard, 'Leaderboard fetched successfully'));
        } catch (error) {
            return res.status(400).json(formatError("Failed to get leaderboard by id"));
        }
    }


    async getGlobalLeaderboard(req: Request, res: Response): Promise<Response<ApiResponse<ILeaderboard>>> {
        try {
            const leaderboard = await this.leaderBoardService.getGlobalLeaderboard();
            return res.status(200).json(formatResponse(leaderboard, 'Leaderboard fetched successfully'));
        } catch (error) {
            return res.status(400).json(formatError("Failed to get Global leaderboard"));
        }
    }


    async getLeaderboardByChallengeId(req: Request, res:Response): Promise<Response<ApiResponse<ILeaderboard>>>{
        try {
            const leaderboard = await this.leaderBoardService.getLeaderBoardByChallengeId(req.params.challengeId);
            return res.status(200).json(formatResponse(leaderboard, 'Leaderboard fetched successfully'));
        } catch (error) {
            return res.status(400).json(formatError("Failed to get leaderboard by challenge id"));
        }
    }
}


export default LeaderBoardController;