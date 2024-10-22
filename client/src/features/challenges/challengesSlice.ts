// Implementation of challengesSlice

// Import necessary packages
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChallenge } from "../../interfaces/IChallenge";
import {
  addDailyLog,
  checkIfUserIsOwner,
  checkIfUserIsParticipant,
  createChallenge,
  getAllChallenges,
  getChallengeById, getMyChallenges,
  getPopularChallenge,
  joinChallenge,
  leaveChallenge,
} from "./challengesActions";
import { ApiResponse } from "../../interfaces/ICommon";


// Define the state interface
interface ChallengesState {
  challenges: IChallenge[];
  selectedChallenge: IChallenge | null;
  popularChallenges: IChallenge[] | [];
  isParticipant: boolean;
  isOwner: boolean;
  loading: boolean;
  message: string;
  error: string | null;
}


// Define the initial state
const initialState: ChallengesState = {
  challenges: [],
  selectedChallenge: null,
  popularChallenges: [],
  isParticipant: false,
  isOwner: false,
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
        .addCase(getMyChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(getMyChallenges.fulfilled, (state, action: PayloadAction<ApiResponse<IChallenge[]>>) => {
            state.challenges = action.payload.data ?? [];
            state.loading = false;
            state.error = null;
        })
        .addCase(getMyChallenges.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch challenges";
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
        (state, action: PayloadAction<boolean>) => {
          state.isParticipant = action.payload ?? false;
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
      })
        .addCase(checkIfUserIsOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(checkIfUserIsOwner.fulfilled, (state, action: PayloadAction<ApiResponse<boolean>>) => {
            state.isOwner = action.payload.data ?? false;
            state.loading = false;
            state.error = null;
        })
        .addCase(checkIfUserIsOwner.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to check if user is owner";
        })
        .addCase(addDailyLog.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addDailyLog.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.selectedChallenge = action.payload.data?? null;
          state.message = action.payload.message ?? "Log added successfully";
        })
        .addCase(addDailyLog.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to add log";
        })
        .addCase(getPopularChallenge.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getPopularChallenge.fulfilled, (state, action: PayloadAction<ApiResponse<IChallenge[]>>) => {
          state.popularChallenges = action.payload.data ?? [];
          state.loading = false;
          state.error = null;
        })
        .addCase(getPopularChallenge.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to fetch popular challenges";
        });
  },
});

export const { setLoading, setError } = challengesSlice.actions;
export default challengesSlice.reducer;
