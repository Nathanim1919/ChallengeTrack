import { IUser } from "./IUser";

export interface ILeaderboard {
    _id?: string;
    challengeId: string;
    rankings: RankEntry[];
    updatedAt?: Date;
}

export interface RankEntry {
    userId: Partial<IUser>;
    score: number;
}


export interface IGlobalLeaderboard {
    userId: IUser;
    totalPoints: number;
    rank: number;
}
