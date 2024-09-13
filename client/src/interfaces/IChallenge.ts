import {IUser} from "./IUser";
import {ILeaderboard} from "./ILeaderBoard.ts";

export interface IChallengePa extends Partial <{
    _id: string;
    title: string;
    description: string;
    createdBy: IUser; // User ID of the creator
    startDate: Date;
    endDate: Date;
    participants: IUser[]; // Array of user IDs
    status: ChallengeStatus;
    visibility: 'public' | 'private';
    logs: string[]; // Log IDs
    createdAt?: Date;
    updatedAt?: Date;
    progress?: number; // Progress percentage
    rules: ChallengeRules; // Additional rules for the challenge
    rewards: ChallengeReward[]; // Potential rewards for completing the challenge
    leaderboard?: ILeaderboard; // Leaderboard ID
}> {}

type ChallengeStatus = 'PENDING' | 'ONGOING' | 'COMPLETED' | 'CANCELED';

export interface ChallengeRules {
    minParticipants: number; // Minimum participants required
    maxParticipants: number; // Optional maximum number of participants
    verificationMethod: VerificationMethod; // How progress is verified
}

type VerificationMethod = 'self-report' | 'third-party' | 'automated';

export interface ChallengeReward {
    description: string;
    points: number; // Points awarded for completion
    badges?: string[]; // Optional badges awarded
}
