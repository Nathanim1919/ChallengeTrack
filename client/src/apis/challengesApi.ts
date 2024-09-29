import apiConfig from "./apiConfig.ts";
import { IChallenge } from "../interfaces/IChallenge.ts";


// Define an api for creating a new challenge
const createChallenge = async (challengeData: Partial<IChallenge>): Promise<IChallenge> => {
    const response = await apiConfig.post("/challenges", challengeData);
    return response.data;
};


// Define an api for getting all challenges
const getAllChallenges = async (): Promise<IChallenge[]> => {
    const response = await apiConfig.get("/challenges");
    return response.data;
};



export default { createChallenge, getAllChallenges };