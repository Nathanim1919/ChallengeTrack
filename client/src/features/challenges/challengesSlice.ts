// Implementation of challengesSlice

// Import necessary packages
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChallenge } from "../../interfaces/IChallenge";
import {
  checkIfUserIsParticipant,
  createChallenge,
  getAllChallenges,
  getChallengeById,
  joinChallenge,
  leaveChallenge,
} from "./challengesActions";
import { ApiResponse } from "../../interfaces/ICommon";


// Define the state interface
interface ChallengesState {
  challenges: IChallenge[];
  selectedChallenge: IChallenge | null;
  isParticipant: boolean;
  loading: boolean;
  message: string;
  error: string | null;
}


// Define the initial state
const initialState: ChallengesState = {
  challenges: [],
  selectedChallenge: null,
  isParticipant: false,
  loading: false,
  message: "",
  error: null,
};


// Create a slice
const challengesSlice = createSlice({
  name: "challenges", // Slice name
  initialState, // Initial state

  // Define the reducers, which are functions that dispatch actions to change the state
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },

  // Define the extra reducers, which are the reducers that respond to actions dispatched by the createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(createChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      })
      .addCase(createChallenge.fulfilled, (state, action) => {
        state.challenges.push(action.payload);
        state.loading = false;
        state.error = null;
        state.message = "Challenge created successfully";
      })
      .addCase(createChallenge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create challenge";
        state.message = "Failed to create challenge";
      })
      .addCase(getAllChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllChallenges.fulfilled,
        (state, action: PayloadAction<ApiResponse<IChallenge[]>>) => {
          state.challenges = action.payload.data ?? [];
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(getAllChallenges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch challenges";
      })
      .addCase(getChallengeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getChallengeById.fulfilled,
        (state, action: PayloadAction<ApiResponse<IChallenge>>) => {
          state.selectedChallenge = action.payload.data;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(getChallengeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch challenge";
      })
      .addCase(checkIfUserIsParticipant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        checkIfUserIsParticipant.fulfilled,
        (state, action: PayloadAction<ApiResponse<boolean>>) => {
          state.isParticipant = action.payload.data ?? false;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(checkIfUserIsParticipant.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to check if user is participant";
      })
      .addCase(joinChallenge.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        joinChallenge.fulfilled,
        (
          state,
          action: PayloadAction<{
            updatedChallenge: ApiResponse<IChallenge>;
            isParticipant: boolean;
          }>
        ) => {
          state.selectedChallenge = action.payload.updatedChallenge.data;
          state.isParticipant = action.payload.isParticipant;
          state.message = "You have joined the challenge";
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(joinChallenge.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "You can't join this challenge right now, try again later.";
      })
      .addCase(leaveChallenge.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        leaveChallenge.fulfilled,
        (
          state,
          action: PayloadAction<{
            updatedChallenge: ApiResponse<IChallenge>;
            isParticipant: boolean;
          }>
        ) => {
          state.selectedChallenge = action.payload.updatedChallenge.data;
          state.isParticipant = action.payload.isParticipant;
          state.message = "You have Left the challenge";
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(leaveChallenge.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "You can't Left this challenge right now, try again later.";
      });
  },
});

export const { setLoading, setError } = challengesSlice.actions;
export default challengesSlice.reducer;
