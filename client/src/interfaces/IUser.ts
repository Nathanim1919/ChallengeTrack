import {ObjectId} from "bson";

interface IUser {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
    profilePicture?: string;
    role: string;
    achievements: ObjectId[];
    createdChallenges: ObjectId[];
    participatedChallenges: ObjectId[];
    wonChallenges: ObjectId[];
    logs: ObjectId[];
    points: number;
    challengePoints: ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IChallengePoints {
    challengeId: ObjectId;
    points: number;
}

const UserRole = {
    ADMIN: 'admin',
    USER: 'user'
};

interface UserPreferences {
    notificationsEnabled: boolean;
    theme: 'light' | 'dark';
}


export { IUser, UserRole, UserPreferences };
