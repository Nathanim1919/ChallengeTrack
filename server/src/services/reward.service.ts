import {RewardPoints, RewardType} from "../utils/enum.utils";


export class RewardService {

    static reward(rewardType: string, currentPoint: number):number{
        let rewardPoint = 0;
        switch (rewardType){
            case RewardType.REGISTRATION_BONUS:
                rewardPoint = RewardPoints.REGISTRATION_BONUS;
                break;
            case RewardType.CREATE_CHALLENGE:
                rewardPoint = RewardPoints.CREATE_CHALLENGE;
                break;
            case RewardType.JOIN_CHALLENGE:
                rewardPoint = RewardPoints.JOIN_CHALLENGE;
                break;
            case RewardType.DAILY_LOGIN:
                rewardPoint = RewardPoints.DAILY_LOGIN;
                break;
            case RewardType.DAILY_CHALLENGE:
                rewardPoint = RewardPoints.DAILY_CHALLENGE;
                break;
            case RewardType.HALF_WAY:
                rewardPoint = RewardPoints.HALF_WAY;
                break;
            case RewardType.CHALLENGE_COMPLETION:
                rewardPoint = RewardPoints.CHALLENGE_COMPLETION;
                break;
            case RewardType.ACHIEVEMENT_UNLOCK:
                rewardPoint = RewardPoints.ACHIEVEMENT_UNLOCK;
                break;
            case RewardType.FIRST_PLACE:
                rewardPoint = RewardPoints.FIRST_PLACE;
                break;
            case RewardType.SECOND_PLACE:
                rewardPoint = RewardPoints.SECOND_PLACE;
                break;
            case RewardType.THIRD_PLACE:
                rewardPoint = RewardPoints.THIRD_PLACE;
                break;
            default:
                throw new Error('Invalid reward type');
        }
        return this.calculateNewPoints(currentPoint, rewardPoint);
    }



    private static calculateNewPoints(currentPoints: number, rewardPoints: number): number {
        if (currentPoints < 0 || currentPoints + rewardPoints < 0) {
            throw new Error('Points cannot be negative');
        }
        return currentPoints + rewardPoints;
    }
}
