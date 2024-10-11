export interface IUser {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    profilePicture?: string;
    role: string;
    achievements: string[];
    createdChallenges: string[];
    participatedChallenges: string[];
    wonChallenges: string[];
    logs: string[];
    points: number;
    challengePoints: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IChallengePoints {
    challengeId: string;
    points: number;
}

export const UserRole = {
    ADMIN: 'admin',
    USER: 'user'
};

export interface UserPreferences {
    notificationsEnabled: boolean;
    theme: 'light' | 'dark';
}
