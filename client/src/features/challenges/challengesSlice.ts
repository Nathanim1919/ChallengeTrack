// Import necessary packages
import {ActionReducerMapBuilder, AsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createChallenge,
  addDailyLog,
  checkIfUserIsOwner,
  checkIfUserIsParticipant,
  deleteChallenge,
  getAllChallenges,
  getChallengeById,
  getMyChallenges,
  getPopularChallenge,
  joinChallenge,
  leaveChallenge,
  popularForUnsignedUser,
} from "./challengesActions";
import { IChallenge } from "../../interfaces/IChallenge";
import { ApiResponse } from "../../interfaces/ICommon";
import { ChallengeResponse, ParticipationStatusResponse } from "./types";

// Define the state interface
interface ChallengesState {
  challenges: IChallenge[];
  selectedChallenge: IChallenge | null;
  popularChallenges: IChallenge[] | [];
  popularChallengesForUnsignedUser: IChallenge[] | [];
  isParticipant: boolean;
  isOwner: boolean;
  loading: boolean;
  message: string;
  error: string | null;
}


// initial state
const initialState: ChallengesState = {
  challenges: [],
  selectedChallenge: null,
  popularChallenges: [],
  popularChallengesForUnsignedUser: [],
  isParticipant: false,
  isOwner: false,
  loading: false,
  message: "",
  error: null,
};


const handleAsyncRequest = <T>(
  builder: ActionReducerMapBuilder<ChallengesState>,
  action: AsyncThunk<ApiResponse<T>, any, {}>,
  stateupdate: (state: ChallengesState, action: PayloadAction<ApiResponse<T>>) => void
) => {
  builder
    .addCase(action.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(action.fulfilled, (state, action: PayloadAction<ApiResponse<T>>) => {
      stateupdate(state, action);
      state.loading = false;
      state.error =  null;
    })
    .addCase(action.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to perform action"
    })
}


// Create a slice
const challengesSlice = createSlice({
  name: "challenges", // Slice name
  initialState, // Initial state

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

    handleAsyncRequest<IChallenge>(builder, createChallenge, (state, action) => {
      state.selectedChallenge = action.payload.data??null;
      state.message = "Challenge created successfully";
    })

    handleAsyncRequest<IChallenge[]>(builder, getAllChallenges, (state, action) => {
      state.challenges = action.payload.data??[]
    })

    handleAsyncRequest<IChallenge>(builder, getChallengeById, (state, action) => {
      state.selectedChallenge = action.payload.data;
    })

    handleAsyncRequest<IChallenge[]>(builder, getMyChallenges, (state, action) => {
      state.challenges = action.payload.data??[]
    })

    handleAsyncRequest<ParticipationStatusResponse>(builder, checkIfUserIsParticipant, (state, action)=> {
      state.isParticipant = action.payload.data?.data??false;
    })

    handleAsyncRequest<IChallenge>(builder, joinChallenge, (state, action) => {
      state.selectedChallenge = action.payload.updatedChallenge.date;
      state.isParticipant = action.payload.isParticipant.date??false;
      state.message = "You have joined the challenge";
    })

    handleAsyncRequest<IChallenge>(builder, leaveChallenge, (state, action) => {
      state.selectedChallenge = action.payload.updatedChallenge.data;
      state.isParticipant = action.payload.isParticipant.data ?? false;
      state.message = "You have left the challenge";
    });

    handleAsyncRequest<IChallenge>(builder, checkIfUserIsOwner, (state, action) => {
      state.isOwner = action.payload.data ?? false;
    });

    handleAsyncRequest<IChallenge>(builder, addDailyLog, (state, action) => {
      state.selectedChallenge = action.payload.data ?? null;
      state.message = action.payload.message ?? "Log added successfully";
    });

    handleAsyncRequest<IChallenge>(builder, getPopularChallenge, (state, action) => {
      state.popularChallenges = action.payload.data ?? [];
    });

    handleAsyncRequest<IChallenge>(builder, deleteChallenge, (state, action) => {
      state.challenges = state.challenges.filter(
        (challenge) => challenge._id !== action.payload.data?._id
      );
    });

    handleAsyncRequest<IChallenge>(builder, popularForUnsignedUser, (state, action) => {
      state.popularChallengesForUnsignedUser = action.payload.data ?? [];
    });
  },
});


export const { setLoading, setError } = challengesSlice.actions;
export default challengesSlice.reducer;
