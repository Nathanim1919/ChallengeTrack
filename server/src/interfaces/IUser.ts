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
    points: number;
    createdAt?: Date;
    updatedAt?: Date;
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
