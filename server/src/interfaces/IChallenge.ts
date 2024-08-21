interface Challenge {
    id: string;
    title: string;
    description: string;
    creatorId: string;
    startDate: Date;
    endDate: Date;
    participants: string[]; // Array of user IDs
    status: ChallengeStatus;
    createdAt: Date;
    updatedAt: Date;
    rules: ChallengeRules; // Additional rules for the challenge
    rewards: ChallengeReward[]; // Potential rewards for completing the challenge
}

type ChallengeStatus = 'pending' | 'ongoing' | 'completed' | 'cancelled';

interface ChallengeRules {
    minParticipants: number; // Minimum participants required
    maxParticipants?: number; // Optional maximum number of participants
    verificationMethod: VerificationMethod; // How progress is verified
}

type VerificationMethod = 'self-report' | 'third-party' | 'automated';

interface ChallengeReward {
    description: string;
    points: number; // Points awarded for completion
    badges?: string[]; // Optional badges awarded
}
