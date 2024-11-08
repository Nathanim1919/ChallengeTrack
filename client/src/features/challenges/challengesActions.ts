import { createAsyncThunk } from "@reduxjs/toolkit";
import challengeService from "../../services/challengeService";
import { IChallenge } from "../../interfaces/IChallenge";
import { ApiResponse } from "../../interfaces/ICommon.ts";
import { ILog } from "../../interfaces/ILogs.ts";
import {
  ChallangeListResponse,
  ChallengeDetailResponse,
  ChallengeResponse,
  JoinLeaveResponse,
  ParticipationStatusResponse,
} from "./types.ts";

// Helper functions for error handling
const handleAsyncError = (
  error: unknown,
  rejectWithValue: (value: string) => void
) => {
  if (error instanceof Error) {
    return rejectWithValue(error.message);
  }
  return rejectWithValue("An unknown error occurred");
};

/**
 * Create a new challenge
 * @param challengeData - Partial data required to create a challenge
 * @returns The created challenge
 */

export const createChallenge = createAsyncThunk<
  ChallengeResponse,
  Partial<IChallenge>
>(
  "challenges/createChallenge",
  async (challengeData: Partial<IChallenge>, { rejectWithValue }) => {
    try {
      return await challengeService.createChallenge(challengeData);
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * Fetches all available challenges.
 * @returns List of all challenges.
 */
export const getAllChallenges = createAsyncThunk<
  ApiResponse<ChallangeListResponse>
>("challenges/getAllChallenges", async (_, { rejectWithValue }) => {
  try {
    return await challengeService.getAllChallenges();
    // console.log(res)
  } catch (error) {
    return rejectWithValue(handleAsyncError(error, rejectWithValue));
  }
});

/**
 * Fetch challenges created by the current user
 * @returns List of user's challenges.
 */
export const getMyChallenges = createAsyncThunk<
  ApiResponse<ChallangeListResponse>
>("challenges/getMyChallenges", async (_, { rejectWithValue }) => {
  try {
    return await challengeService.getMyChallenges();
  } catch (error) {
    return rejectWithValue(handleAsyncError(error, rejectWithValue));
  }
});

/**
 * Fetches a specific challenge by ID along with participation and ownership status.
 * @param challengeId - ID of the challenge to fetch.
 * @returns - Challenge details, participation status, and ownership status.
 */
export const getChallengeById = createAsyncThunk<
  ChallengeDetailResponse,
  string
>(
  "challenges/getChallengeById",
  async (challengeId: string, { rejectWithValue }) => {
    try {
      const [challenge, isParticipant, isOwner] = await Promise.all([
        challengeService.getChallengeById(challengeId),
        challengeService.checkIfUserIsParticipant(challengeId),
        challengeService.checkIfUserIsOwner(challengeId),
      ]);
      return {
        challenge,
        isParticipant,
        isOwner,
      };
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * Checks if the current user is the creater of the specific challenge.
 * @param challengeId - ID of the challenge to compare the createdby field with the current user id
 * @returns - Boolean
 */
export const checkIfUserIsOwner = createAsyncThunk<
  ParticipationStatusResponse,
  string
>(
  "challenges/checkIfUserIsOwner",
  async (challengeId: string, { rejectWithValue }) => {
    try {
      return await challengeService.checkIfUserIsOwner(challengeId);
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * Checks if the current user is participant of the specific challenge
 * @param challengeId - ID of the challenge to check whether the current userId is found inside the participants array or not
 * @returns - Boolean
 */
export const checkIfUserIsParticipant = createAsyncThunk<
  ParticipationStatusResponse,
  string
>(
  "challenges/checkIfUserIsParticipant",
  async (challengeId: string, { rejectWithValue }) => {
    try {
      return await challengeService.checkIfUserIsParticipant(challengeId);
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * Allows the current user to join a challenge
 * @param challengeId - ID of the challenge to join
 * @returns updated challenge details and user's participation status.
 */

export const joinChallenge = createAsyncThunk<JoinLeaveResponse, string>(
  "challenges/joinChallenge",
  async (challengeId: string, { rejectWithValue }) => {
    try {
      await challengeService.joinChallenge(challengeId);
      const [updatedChallenge, isParticipant] = await Promise.all([
        challengeService.getChallengeById(challengeId),
        challengeService.checkIfUserIsParticipant(challengeId),
      ]);
      return {
        updatedChallenge,
        isParticipant,
      };
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * Allows the current user to leave a challenge
 * @param challengeId - ID of the challenge to leave.
 * @returns Updated challenge details and user's participation status.
 */

export const leaveChallenge = createAsyncThunk<JoinLeaveResponse, string>(
  "challenges/leaveChallenge",
  async (challengeId: string, { rejectWithValue }) => {
    try {
      await challengeService.leaveChallenge(challengeId);
      const [updatedChallenge, isParticipant] = await Promise.all([
        challengeService.getChallengeById(challengeId),
        challengeService.checkIfUserIsParticipant(challengeId),
      ]);

      return {
        updatedChallenge,
        isParticipant,
      };
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * Adds a daily log entry for the specified challenge.
 * @param params - Object containing challenge ID and log data.
 * @param params.challengeId - ID of the challenge to log.
 * @param params.logs - Log data to add to the challenge.
 * @returns updated challenge object with the new log.
 */
export const addDailyLog = createAsyncThunk<
  ChallengeResponse,
  { challengeId: string; logs: Partial<ILog> }
>(
  "challenges/addDailyLog",
  async ({ challengeId, logs }, { rejectWithValue }) => {
    try {
      return await challengeService.addDailyLog(challengeId, logs);
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * fetchs popular challenges based on the number of participants
 * @returns - A list of popular challenges
 */

export const getPopularChallenge = createAsyncThunk<ChallangeListResponse>(
  "challenges/getPopularChallenge",
  async (_, { rejectWithValue }) => {
    try {
      return await challengeService.getPopularChallenge();
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * fetch popular challenges which is displayed for unregistered users
 * @returns - list of popular challenges
 */
export const popularForUnsignedUser = createAsyncThunk<ChallangeListResponse>(
  "challenges/popularForUnsignedUser",
  async (_, { rejectWithValue }) => {
    try {
      return await challengeService.popularForUnsignedUser();
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

/**
 * delete a specific challenge
 * @param challengeId - ID of the challenge to be deleted
 * @returns - void
 */
export const deleteChallenge = createAsyncThunk(
  "challenges/deleteChallenge",
  async (challengeId: string, { rejectWithValue }) => {
    try {
      return await challengeService.deleteChallenge(challengeId);
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);
