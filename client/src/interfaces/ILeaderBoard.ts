import {ObjectId} from "bson";
import { IUser } from "./IUser";

export interface ILeaderboard {
    _id?: ObjectId;
    challengeId: ObjectId;
    rankings: RankEntry[];
    updatedAt?: Date;
}

export interface RankEntry {
    userId: Partial<IUser>;
    score: number;
}


export interface IGlobalLeaderboard {
    userId: ObjectId;
    totalPoints: number;
    rank: number;
}
