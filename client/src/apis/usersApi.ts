import apiConfig from "./apiConfig";

const fetchUsers = async () => {
  const response = await apiConfig.get("/users");
  return response.data;
};

const inviteUser = async (identifier: string, challengeId: string) => {
  const response = await apiConfig.post("/users/invite", {
    identifier,
    challengeId,
  });
  return response.data;
};

const getUserById = async (userId: string) => {
  const response = await apiConfig.get(`/users/${userId}`);
  return response.data;
};

const getUsersTotalChallengeParticipation = async (identifier?: string) => {
  const response = await apiConfig.get("/users/totalChallengeParticipation", {
    params: { identifier },
  });
  return response.data;
};

const getUsersTotalChallengeWins = async (identifier?: string) => {
  const response = await apiConfig.get("/users/totalChallengeWins", {
    params: { identifier },
  });
  return response.data;
};

const getUsersTotalPoints = async (identifier?: string) => {
  const response = await apiConfig.get("/users/totalPoints", {
    params: { identifier },
  });
  return response.data;
};

const getUsersTotalLogs = async (identifier?: string, challengeId?: string) => {
  const response = await apiConfig.get("/users/totalLogs", {
    params: { identifier, challengeId },
  });
  return response.data;
};

const getUsersTotalAchievements = async (identifier?: string) => {
  const response = await apiConfig.get("/users/totalAchievements", {
    params: { identifier },
  });
  return response.data;
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
