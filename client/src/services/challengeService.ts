import { IChallenge } from "../interfaces/IChallenge";
import challengesApi from "../apis/challengesApi";



const createChallenge = async (challengeData: Partial<IChallenge>) => {
    return await challengesApi.createChallenge(challengeData);
}

 
const getAllChallenges = async () => {
    return await challengesApi.getAllChallenges();
};


const getChallengeById = async (challengeId: string) => {
    return await challengesApi.getChallengeById(challengeId);
};


const checkIfUserIsParticipant = async (challengeId: string) => {
    return await challengesApi.checkIfUserIsParticipant(challengeId);
};



export default { createChallenge, getAllChallenges, getChallengeById, checkIfUserIsParticipant };