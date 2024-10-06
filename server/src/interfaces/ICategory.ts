import { ObjectId } from "mongoose";

export interface ICategory {
    _id?: string;
    name: string;
    description: string;
    challenges: string[];
}

interface ChallengeCategory {
    challengeId: string;
    categoryId: string;
}
