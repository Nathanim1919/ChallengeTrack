import leaderboardApi from "../apis/leaderboardApi";



const getLeaderboardById = async (leaderboardId: string) => {
    return await leaderboardApi.getLeaderboardById(leaderboardId);
};

const getGlobalLeaderboard = async () => {
    return await leaderboardApi.getGlobalLeaderboard();
};

const getLeaderBoardByChallengeId = async (challengeId: string) => {
    console.log("[LEADERBOARD SERVICE FILE] - The challenge id: ",challengeId);
    return await leaderboardApi.getLeaderBoardByChallengeId(challengeId);
};


export default { getLeaderboardById, getGlobalLeaderboard, getLeaderBoardByChallengeId };