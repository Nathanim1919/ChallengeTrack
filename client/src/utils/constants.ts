export const RewardType = {
    REGISTRATION_BONUS: 'REGISTRATION_BONUS',
    LEAVE_CHALLENGE: 'LEAVE_CHALLENGE',
    DAILY_LOGIN: 'DAILY_LOGIN',
    DAILY_CHALLENGE: 'DAILY_CHALLENGE',
    JOIN_CHALLENGE: 'JOIN_CHALLENGE',
    CREATE_CHALLENGE: 'CREATE_CHALLENGE',
    MISS_DAILY_CHALLENGE: 'MISS_DAILY_CHALLENGE',
    HALF_WAY: 'HALF_WAY',
    CHALLENGE_COMPLETION: 'CHALLENGE_COMPLETION',
    ACHIEVEMENT_UNLOCK: 'ACHIEVEMENT_UNLOCK',
    FIRST_PLACE: 'FIRST_PLACE',
    SECOND_PLACE: 'SECOND_PLACE',
    THIRD_PLACE: 'THIRD_PLACE',
    
};


export const ChallengeLevel = {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
};

export const ChallengeVisibility = {
    PUBLIC: 'PUBLIC',
    PRIVATE: 'PRIVATE',
}

export const ChallengeStatus = {
    UPCOMING: 'UPCOMING',
    ACCEPTED: 'ACCEPTED',
    REJECTED: 'REJECTED',
    CANCELED: 'CANCELED',
    COMPLETED: 'COMPLETED',
    READY:'READY',
    ONGOING:"ONGOING"
};


export const RewardPoints = {
    [RewardType.REGISTRATION_BONUS]: 100,
    [RewardType.DAILY_LOGIN]: 5,
    [RewardType.DAILY_CHALLENGE]: 10,
    [RewardType.HALF_WAY]: 20,
    [RewardType.CHALLENGE_COMPLETION]: 50,
    [RewardType.FIRST_PLACE]: 100,
    [RewardType.SECOND_PLACE]: 50,
    [RewardType.THIRD_PLACE]: 25,
    [RewardType.JOIN_CHALLENGE]: 10,
    [RewardType.CREATE_CHALLENGE]: -10,
    [RewardType.CREATE_CHALLENGE]: -5,
    [RewardType.MISS_DAILY_CHALLENGE]: -5,
    [RewardType.LEAVE_CHALLENGE]: -10,
    [RewardType.ACHIEVEMENT_UNLOCK]: 30,

};

export const userActionConfirmationMessages = {
    JOIN_CHALLENGE: 'Are you sure you want to join this challenge?',
    CREATE_CHALLENGE: 'Are you sure you want to create this challenge?',
    LEAVE_CHALLENGE: `Are you sure you want to leave this challenge? you are going to lose ${RewardPoints[RewardType.LEAVE_CHALLENGE]} XP`,
    DAILY_LOGIN: 'Are you sure you want to login today?',
    DAILY_CHALLENGE: 'Are you sure you want to complete a daily challenge?',
    CHALLENGE_COMPLETION: 'Are you sure you want to complete this challenge?',
    ACHIEVEMENT_UNLOCK: 'Are you sure you want to unlock this achievement?',
    FIRST_PLACE: 'Are you sure you want to secure first place in this challenge?',
    SECOND_PLACE: 'Are you sure you want to secure second place in this challenge?',
    THIRD_PLACE: 'Are you sure you want to secure third place in this challenge?',
    MISS_DAILY_CHALLENGE: 'Are you sure you want to miss a daily challenge?',
    HALF_WAY: 'Are you sure you want to complete half way in this challenge?',
    DELETE_CHALLENGE: 'Are you sure you want to delete this challenge?',
};
    
    export const userActionMessages = {
        JOIN_CHALLENGE: 'joined a challenge',
        CREATE_CHALLENGE: 'created a challenge',
        LEAVE_CHALLENGE: 'left a challenge',
        DAILY_LOGIN: 'logged in today',
        DAILY_CHALLENGE: 'completed a daily challenge',
        CHALLENGE_COMPLETION: 'completed a challenge',
        ACHIEVEMENT_UNLOCK: 'unlocked an achievement',
        FIRST_PLACE: 'secured first place in a challenge',
        SECOND_PLACE: 'secured second place in a challenge',
        THIRD_PLACE: 'secured third place in a challenge',
        MISS_DAILY_CHALLENGE: 'missed a daily challenge',
        HALF_WAY: 'completed half way in a challenge',
    };



    