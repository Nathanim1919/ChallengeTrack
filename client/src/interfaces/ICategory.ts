import { IChallenge } from "./IChallenge";

export interface ICategory {
    _id?: string;
    name: string;
    description: string;
    challenges: IChallenge[];
}

// interface ChallengeCategory {
//     challengeId: string;
//     categoryId: string;
// }
