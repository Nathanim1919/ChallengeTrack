import { IChallenge } from "../interfaces/IChallenge";
import challengesApi from "../apis/challengesApi";



const createChallenge = async (challengeData: Partial<IChallenge>) => {
    return await challengesApi.createChallenge(challengeData);
}

 
const getAllChallenges = async () => {
    return await challengesApi.getAllChallenges();
};



export default { createChallenge, getAllChallenges };