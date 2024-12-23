import { IChallenge } from "../interfaces/IChallenge";
import challengesApi from "../apis/challengesApi";
import { ILog } from "../interfaces/ILogs";

const createChallenge = async (challengeData: Partial<IChallenge>) => {
  return await challengesApi.createChallenge(challengeData);
};

const getAllChallenges = async () => {
  return await challengesApi.getAllChallenges();
};

const getMyChallenges = async () => {
    return await challengesApi.getMyChallenges();
}

const getChallengeById = async (challengeId: string) => {
  return await challengesApi.getChallengeById(challengeId);
};

const checkIfUserIsOwner = async (challengeId: string) => {
    return await challengesApi.checkIfUserIsOwner(challengeId);
};

const getPopularChallenge = async () => {
  return await challengesApi.getPopularChallenge();
};

const popularForUnsignedUser = async () => {
  return await challengesApi.getPopularChallengeOvervierForUnsignedUser();
}

const checkIfUserIsParticipant = async (challengeId: string) => {
  return await challengesApi.checkIfUserIsParticipant(challengeId);
};

const joinChallenge = async (challengeId: string) => {
  return await challengesApi.joinChallenge(challengeId);
};

const leaveChallenge = async (challengeId: string) => {
  return await challengesApi.leaveChallenge(challengeId);
};

const getChallengeParticipants = async (challengeId: string) => {
  return await challengesApi.getChallengeParticipants(challengeId);
};

const markChallengeAsCompleted = async (challengeId: string) => {
  return await challengesApi.markChallengeAsCompleted(challengeId);
};

const inviteUserToChallenge = async (challengeId: string, userId: string) => {
  return await challengesApi.inviteUserToChallenge(challengeId, userId);
};

const reportAsInappropriate = async (challengeId: string) => {
  return await challengesApi.reportAsInappropriate(challengeId);
};

const addDailyLog = async (challengeId: string, logData: Partial<ILog>) => {
  return await challengesApi.createChallengeLog(challengeId, logData);
};

const deleteChallenge = async (challengeId: string) => {
  return await challengesApi.deleteChallenge(challengeId);
};

export default {
  createChallenge,
  getAllChallenges,
  getMyChallenges,
  getChallengeById,
  checkIfUserIsParticipant,
  joinChallenge,
  getChallengeParticipants,
  leaveChallenge,
  markChallengeAsCompleted,
  inviteUserToChallenge,
  reportAsInappropriate,
  checkIfUserIsOwner,
  addDailyLog,
  getPopularChallenge,
  deleteChallenge,
  popularForUnsignedUser
};
