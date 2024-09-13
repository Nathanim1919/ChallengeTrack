interface IAchievement {
    id: string;
    name: string;
    description: string;
    criteria: AchievementCriteria;
    points: number;
    badgeUrl?: string;
}

interface AchievementCriteria {
    type: 'participation' | 'completion' | 'winning';
    threshold: number; // e.g., participate in 5 challenges
}

interface UserAchievement {
    userId: string;
    achievementId: string;
    earnedAt: Date;
}
