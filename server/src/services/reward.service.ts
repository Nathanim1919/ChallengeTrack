import {RewardPoints} from "../utils/enum.utils";


export class RewardService {
    static  rewardUserForDailyLogin(currentPoints: number): number{
        return this.calculateNewPoints(currentPoints, RewardPoints.DAILY_LOGIN);
    }

    static rewardDailyChallenge(currentPoints: number): number {
        return this.calculateNewPoints(currentPoints, RewardPoints.DAILY_CHALLENGE);
    }

    static rewardHalfWay(currentPoints: number): number {
        return this.calculateNewPoints(currentPoints, RewardPoints.HALF_WAY);
    }

    static rewardChallengeCompletion(currentPoints: number): number {
        return this.calculateNewPoints(currentPoints, RewardPoints.CHALLENGE_COMPLETION);
    }


    private static calculateNewPoints(currentPoints: number, rewardPoints: number): number {
        if (currentPoints < 0 || rewardPoints < 0) {
            throw new Error('Points cannot be negative');
        }
        return currentPoints + rewardPoints;
    }
}
