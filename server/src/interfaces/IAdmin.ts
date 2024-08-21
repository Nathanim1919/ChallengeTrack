interface IAdminDashboard {
    totalUsers: number;
    totalChallenges: number;
    activeChallenges: number;
    reportedChallenges: ReportedChallenge[];
}


interface ReportedChallenge {
    challengeId: string;
    reportCount: number;
    lastReportedAt: Date;
    status: 'under-review' | 'resolved' | 'dismissed';
    reason: ''
}
