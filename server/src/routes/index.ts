import express from 'express';
import ChallengeRoute from "./challenge.route";
import { ChallengeRepository } from "../repositories/challenge.repository";
import ChallengeService from "../services/challenge.service";
import UserRoute from "./user.route";
import ChallengeController from "../controllers/challenge.controller";
import { UserService } from "../services/user.service";
import { UserRepository } from "../repositories/user.repository";
import { UserController } from "../controllers/user.controller";
import LeaderBoardService from '../services/leaderBoard.service';
import LeaderboardRepository from '../repositories/leaderboard.repository';
import { AuthUtils } from '../utils/auth.utils';
import { CategoryRepository } from '../repositories/category.repository';
import { CategoryService } from '../services/category.service';
import CategoryController from '../controllers/categorie.controller';
import CategoryRoute from './categorie.route';
import LeaderBoardController from '../controllers/leaderboard.controller';
import LeaderBoardRoute from './leaderboard.route';

export class Routes {
    public static configureRoutes(app: express.Application, baseUrl: string) {
        // Common service instances
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);
        const leaderboardService = new LeaderBoardService(new LeaderboardRepository());
        const categoryService = new CategoryService(new CategoryRepository());

        // Challenge routes
        const challengeController = new ChallengeController(new ChallengeService(new ChallengeRepository(), userService, leaderboardService, categoryService));
        const challengeRoute = new ChallengeRoute(challengeController);
        challengeRoute.configureRoutes(app, baseUrl);

        // User routes
        const userController = new UserController(userService, new AuthUtils(userService));
        const userRoute = new UserRoute(userController);
        userRoute.configureRoutes(app, baseUrl);

        // Category routes
        const categoryController = new CategoryController(categoryService);
        const categoryRoute = new CategoryRoute(categoryController);
        categoryRoute.configureRoutes(app, baseUrl);


        // Leaderboard routes
        const leaderboardController = new LeaderBoardController(leaderboardService);
        const leaderboardRoute = new LeaderBoardRoute(leaderboardController);
        leaderboardRoute.configureRoutes(app, baseUrl);
    }
}
