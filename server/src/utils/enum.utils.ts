export const challengeStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    REJECTED: 'REJECTED',
    CANCELED: 'CANCELED',
    COMPLETED: 'COMPLETED'
};

// notificationUtils.ts
export enum NotificationType {
    Challenge = 'challenge',
    Achievement = 'achievement',
    Reward = 'reward',
    System = 'system'
}

export const NotificationMessages = {
    [NotificationType.Challenge]: 'You have a new challenge!',
    [NotificationType.Achievement]: 'Congratulations! You have unlocked a new achievement!',
    [NotificationType.Reward]: 'Congratulations! You have earned a new reward!',
    [NotificationType.System]: 'System update available.'
};

export const RewardType = {
    DAILY_LOGIN: 'DAILY_LOGIN',
    DAILY_CHALLENGE: 'DAILY_CHALLENGE',
    HALF_WAY: 'HALF_WAY',
    CHALLENGE_COMPLETION: 'CHALLENGE_COMPLETION',
};

export const RewardPoints = {
    [RewardType.DAILY_LOGIN]: 5,
    [RewardType.DAILY_CHALLENGE]: 10,
    [RewardType.HALF_WAY]: 20,
    [RewardType.CHALLENGE_COMPLETION]: 50
};

export const RewardMessages = {
    [RewardType.DAILY_LOGIN]: 'Congratulations! You have earned 5 points for logging in today!',
    [RewardType.DAILY_CHALLENGE]: 'Congratulations! You have earned 10 points for completing a daily challenge!',
    [RewardType.HALF_WAY]: 'Congratulations! You have earned 20 points for completing half of the challenge!',
    [RewardType.CHALLENGE_COMPLETION]: 'Congratulations! You have earned 50 points for completing the challenge!'
};

export const AchievementType = {
    BRONZE: 'BRONZE',
    SILVER: 'SILVER',
    GOLD: 'GOLD'
};

export const AchievementMessages = {
    [AchievementType.BRONZE]: 'Congratulations! You have unlocked a new bronze achievement!',
    [AchievementType.SILVER]: 'Congratulations! You have unlocked a new silver achievement!',
    [AchievementType.GOLD]: 'Congratulations! You have unlocked a new gold achievement!'

};

export const AchievementPoints = {
    [AchievementType.BRONZE]: 10,
    [AchievementType.SILVER]: 20,
    [AchievementType.GOLD]: 30
};


export const CacheKeys = {
    UserProfile: (userId: string) => `user_profile_${userId}`,
    ChallengeDetails: (challengeId: string) => `challenge_details_${challengeId}`,
    Leaderboard: 'global_leaderboard'
};

export const CompoundAchievementCriteria = {
    MarathonRunner: [
        { type: AchievementType.BRONZE, condition: 'Complete 5 challenges in a week' },
        { type: AchievementType.SILVER, condition: 'Complete 10 challenges in a week' },
        { type: AchievementType.GOLD, condition: 'Complete 20 challenges in a month' }
    ]
};
