import {IUser} from "./IUser";
import {ApiResponse} from "./ICommon";
import {IChallenge} from "./IChallenge";

interface createChallengeResponse extends ApiResponse<IChallenge> {}
interface GetLeaderBoardResponse extends ApiResponse<Leaderboard>{}
interface GetUserProfileResponse extends ApiResponse<IUser> {}
