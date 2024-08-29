import redisInstance from '../config/redis.config';
import {NextFunction} from "express";
import {ApiResponse} from "../interfaces/ICommon";
import {IUser} from "../interfaces/IUser";
import {formatResponse} from "../utils/responseFormat";
import {Request, Response} from "express";


const rateLimiter = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.userId; // Assume userId is extracted from JWT
    const key = `rate_limit:${userId}`;
    const currentCount = await redisInstance.getStringData(key);

    if (currentCount && parseInt(currentCount) >= 100) {
        return res.status(429).json({ message: 'Too many requests' });
    }
    if (!currentCount) {
        await redisInstance.saveStringDataWithExpiration(key, '1', 60); // 1 request in 60 seconds
    } else {
        await redisInstance.incr(key);
    }
    next();
};



// user cache middleware
const userCacheMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<IUser>> | void> => {
    const userId = req.userId; // Assume userId is extracted from JWT
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const key = `user:${userId}`;
    const user = await redisInstance.getObjectData(key);

    if (user) {
        return res.status(200).json(formatResponse(user, 'User data retrieved from cache'));
    }
    next();
};



const leaderBoardCacheMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<Leaderboard>> | void> => {
    const key = `leaderboard`+req.params.id;
    const leaderboard = await redisInstance.getObjectData(key);

    if (leaderboard) {
        return res.status(200).json(formatResponse(leaderboard, 'Leaderboard data retrieved from cache'));
    }
    next();
}



const notificationCacheMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<Notification>> | void> => {
    const key = `notification`+req.params.id;
    const notification = await redisInstance.getObjectData(key);

    if (notification) {
        return res.status(200).json(formatResponse(notification, 'Notification data retrieved from cache'));
    }
    next();
}



const achievementCacheMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<IAchievement>> | void> => {
    const key = `achievement`+req.params.id;
    const achievement = await redisInstance.getObjectData(key);

    if (achievement) {
        return res.status(200).json(formatResponse(achievement, 'Achievement data retrieved from cache'));
    }
    next();
}



const userAchievementCacheMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<UserAchievement>> | void> => {
    const key = `userAchievement`+req.params.id;
    const userAchievement = await redisInstance.getObjectData(key);

    if (userAchievement) {
        return res.status(200).json(formatResponse(userAchievement, 'UserAchievement data retrieved from cache'));
    }
    next();
}


// const userNotificationCahceMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<UserNotification>> | void> => {
//     const key = `userNotification`+req.params.id;
//     const userNotification = await redisInstance.getObjectData(key);
//
//     if (userNotification) {
//         return res.status(200).json(formatResponse(userNotification, 'UserNotification data retrieved from cache'));
//     }
//     next();
// }


// const userLeaderboardCahceMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<UserLeaderboard>> | void> => {
//     const key = `userLeaderboard`+req.params.id;
//     const userLeaderboard = await redisInstance.getObjectData(key);
//
//     if (userLeaderboard) {
//         return res.status(200).json(formatResponse(userLeaderboard, 'UserLeaderboard data retrieved from cache'));
//     }
//     next();
// }


// const userActivityCahceMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<UserActivity>> | void> => {
//     const key = `userActivity`+req.params.id;
//     const userActivity = await redisInstance.getObjectData(key);
//
//     if (userActivity) {
//         return res.status(200).json(formatResponse(userActivity, 'UserActivity data retrieved from cache'));
//     }
//     next();
// }

//
// const isFirstTimeUser = async (req: Request, res: Response, next: NextFunction): Promise<Response<ApiResponse<UserActivity>> | void> => {
//     const key = `userActivity`+req.params.id;
//     const userActivity = await redisInstance.getObjectData(key);
//
//     if (userActivity) {
//         return res.status(200).json(formatResponse(userActivity, 'UserActivity data retrieved from cache'));
//     }
//     next();
// }

export {rateLimiter, userCacheMiddleware, leaderBoardCacheMiddleware, notificationCacheMiddleware, achievementCacheMiddleware, userAchievementCacheMiddleware};
