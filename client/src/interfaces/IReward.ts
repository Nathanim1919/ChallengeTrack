interface Reward {
    id: string;
    name: string;
    description: string;
    pointsRequired: number; // Points needed to earn this reward
    badgeUrl?: string; // Optional badge image
    createdAt: Date;
}

interface UserReward {
    userId: string;
    rewardId: string;
    earnedAt: Date;
}
