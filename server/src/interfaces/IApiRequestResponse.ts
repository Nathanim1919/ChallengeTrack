import {IUser} from "./IUser";

interface createChallengeResponse extends ApiResponse<Challenge> {}
interface GetLeaderBoardResponse extends ApiResponse<Leaderboard>{}
interface GetUserProfileResponse extends ApiResponse<IUser> {}
