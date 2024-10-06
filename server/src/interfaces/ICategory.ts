import { ObjectId } from "mongoose";

export interface ICategory {
    _id?: ObjectId;
    name: string;
    description: string;
    challenges: ObjectId[];
}

interface ChallengeCategory {
    challengeId: string;
    categoryId: string;
}
