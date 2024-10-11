import { usersApi } from "../apis";

const fetchUsers = async () => {
  return await usersApi.fetchUsers();
};
const inviteUser = async (identifier: string, challengeId: string) => {
  return await usersApi.inviteUser(identifier, challengeId);
};
const getUserById = async (userId: string) => {
  return await usersApi.getUserById(userId);
};

const getUsersTotalChallengeParticipation = async (identifier?: string) => {
  return await usersApi.getUsersTotalChallengeParticipation(identifier);
};

const getUsersTotalChallengeWins = async (identifier?: string) => {
  return await usersApi.getUsersTotalChallengeWins(identifier);
};

const getUsersTotalPoints = async (identifier?: string) => {
  return await usersApi.getUsersTotalPoints(identifier);
};

const getUsersTotalLogs = async (identifier?: string, challengeId?: string) => {
  return await usersApi.getUsersTotalLogs(identifier, challengeId);
};

const getUsersTotalAchievements = async (identifier?: string) => {
  return await usersApi.getUsersTotalAchievements(identifier);
};

export {
  fetchUsers,
  inviteUser,
  getUserById,
  getUsersTotalChallengeParticipation,
  getUsersTotalChallengeWins,
  getUsersTotalPoints,
  getUsersTotalLogs,
  getUsersTotalAchievements,
};
