interface Leaderboard {
    id: string;
    challengeId: string;
    rankings: RankEntry[];
    updatedAt: Date;
}

interface RankEntry {
    userId: string;
    rank: number;
    points: number;
    progress: string; // e.g., percentage completion
}
