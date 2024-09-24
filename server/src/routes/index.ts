// main entry point for all routes
import express from 'express';
import ChallengeRoute from "./challenge.route";
import {ChallengeRepository} from "../repositories/challenge.repository";
import ChallengeService from "../services/challenge.service";
import UserRoute from "./user.route";
import ChallengeController from "../controllers/challenge.controller";
import {UserService} from "../services/user.service";
import {UserRepository} from "../repositories/user.repository";
import {UserController} from "../controllers/user.controller";
import LeaderBoardService from '../services/leaderBoard.service';
import LeaderboardRepository from '../repositories/leaderboard.repository';


export class Routes {
    public static configureRoutes(app: express.Application, baseUrl: string) {
        // Challenge routes
        const challengeController = new ChallengeController(new ChallengeService(new ChallengeRepository(), new UserService(new UserRepository()), new LeaderBoardService(new LeaderboardRepository())));
        const challengeRoute = new ChallengeRoute(challengeController);
        challengeRoute.configureRoutes(app, baseUrl);

        // User routes
        const userController = new UserController(new UserService(new UserRepository()));
        const userRoute = new UserRoute(userController);
        userRoute.configureRoutes(app, baseUrl);

    
    }
}
