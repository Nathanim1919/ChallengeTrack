import { createAsyncThunk } from "@reduxjs/toolkit";
import challengeService from "../../services/challengeService";
import { IChallenge } from "../../interfaces/IChallenge";
import { ILog } from "../../interfaces/ILogs";
import {
  ChallangeListResponse,
  ChallengeDetailResponse,
  ChallengeResponse,
  JoinLeaveResponse,
  ParticipationStatusResponse,
} from "./types";
import { ApiResponse } from "../../interfaces/ICommon";

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

export const createChallenge = createAsyncThunk<
  ApiResponse<IChallenge>,
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

export const getAllChallenges = createAsyncThunk<
  ChallangeListResponse
>("challenges/getAllChallenges", async (_, { rejectWithValue }) => {
  try {
    return await challengeService.getAllChallenges();
  } catch (error) {
    return rejectWithValue(handleAsyncError(error, rejectWithValue));
  }
});

export const getMyChallenges = createAsyncThunk<
  ChallangeListResponse
>("challenges/getMyChallenges", async (_, { rejectWithValue }) => {
  try {
    return await challengeService.getMyChallenges();
  } catch (error) {
    return rejectWithValue(handleAsyncError(error, rejectWithValue));
  }
});

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