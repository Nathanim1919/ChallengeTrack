import {ObjectId} from "bson";

export interface ILogs {
    _id: string;
    user: ObjectId
    challenge: ObjectId;
    // timestamp: Date;
    details:string,
    // images: [string]
    days: number;
    // createdAt: Date;
}
