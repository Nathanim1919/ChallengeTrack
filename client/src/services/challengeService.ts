import { IChallenge } from "../interfaces/IChallenge";
import challengesApi from "../apis/challengesApi";

const createChallenge = async (challengeData: Partial<IChallenge>) => {
  return await challengesApi.createChallenge(challengeData);
};

const getAllChallenges = async () => {
  return await challengesApi.getAllChallenges();
};

const getChallengeById = async (challengeId: string) => {
  return await challengesApi.getChallengeById(challengeId);
};

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

export default {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  checkIfUserIsParticipant,
  joinChallenge,
  getChallengeParticipants,
  leaveChallenge,
  markChallengeAsCompleted,
  inviteUserToChallenge,
  reportAsInappropriate,
};
