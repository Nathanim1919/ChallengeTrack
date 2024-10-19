import { Application } from "express";
import LeaderBoardController from "../controllers/leaderboard.controller";
import { verifyUser } from "../middlewares/auth.middleware";

class LeaderBoardRoute {
    constructor(private leaderboardController: LeaderBoardController){}

    public configureRoutes(app: Application, baseUrl: string) {
        app.route(`${baseUrl}/leaderboard/global`)
            .all(verifyUser)
            .get(this.leaderboardController.getGlobalLeaderboard.bind(this.leaderboardController))
            
        app.route(`${baseUrl}/leaderboard/challenge/:challengeId`)
            .all(verifyUser)
            .get(this.leaderboardController.getLeaderboardByChallengeId.bind(this.leaderboardController))
        app.route(`${baseUrl}/leaderboard/:id`)
            .all(verifyUser)
            .get(this.leaderboardController.getLeaderboardById.bind(this.leaderboardController))
    }
}

export default LeaderBoardRoute;