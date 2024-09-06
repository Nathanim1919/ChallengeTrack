import {ObjectId} from "bson";

export interface ILeaderboard {
    _id?: ObjectId;
    challengeId: ObjectId;
    rankings: RankEntry[];
    updatedAt?: Date;
}

export interface RankEntry {
    userId: string;
    point: number;
}


export interface IGlobalLeaderboard {
    userId: ObjectId;
    totalPoints: number;
    rank: number;
}
