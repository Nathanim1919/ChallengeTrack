import userApi from "../apis/userApi";

const fetchUsers = async () => {
  return await fechUsers();
};
const inviteUser = async (identifier, challengeId) => {
  return await userApi.inviteUser(identifier, challengeId);
};
const getUserById = async (userId) => {
  return await userApi.getUserById(userId);
};

const getUsersTotalChallengeParticipation = async (identifier?: string) => {
  return await userApi.getUsersTotalChallengeParticipation(identifier);
};

const getUsersTotalChallengeWins = async (identifier?: string) => {
  return await userApi.getUsersTotalChallengeWins(identifier);
};

const getUsersTotalPoints = async (identifier?: string) => {
  return await userApi.getUsersTotalPoints(identifier);
};

const getUsersTotalLogs = async (identifier?: string, challengeId?: string) => {
  return await userApi.getUsersTotalLogs(identifier, challengeId);
};

const getUsersTotalAchievements = async (identifier?: string) => {
  return await userApi.getUsersTotalAchievements(identifier);
};

export {
  fetchUsers,
  inviteUser,
  getUserById,
  getUsers,
  getUsersTotalChallengeParticipation,
  getUsersTotalChallengeWins,
  getUsersTotalPoints,
  getUsersTotalLogs,
  getUsersTotalAchievements,
};
