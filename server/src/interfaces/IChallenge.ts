import {ObjectId} from "bson";
import {IUser} from "./IUser";

export interface IChallenge {
    _id: ObjectId;
    title: string;
    description: string;
    createdBy: ObjectId; // User ID of the creator
    startDate: Date;
    endDate: Date;
    level: 'EASY' | 'MEDIUM' | 'HARD';
    duration: number; // Duration in days
    participants: string[]; // Array of user IDs
    status: ChallengeStatus;
    visibility: String;
    logs: ObjectId[]; // Log IDs
    createdAt?: Date;
    updatedAt?: Date;
    progress?: number; // Progress percentage
    // rules: ChallengeRules; // Additional rules for the challenge
    rewards: ChallengeReward[]; // Potential rewards for completing the challenge
    leaderboard?: ObjectId; // Leaderboard ID
    totalParticipants: number; // Total number of participants
    participantsOnTrack: number; // Number of participants on track
    participantsBehind: number; // Number of participants behind
    participantsLeft: number; // Number of participants who left
    categorie: string; // Challenge categories
}

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
