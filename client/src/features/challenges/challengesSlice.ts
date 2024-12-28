import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChallenge } from "../../interfaces/IChallenge";
import { ChallangeListResponse, ChallengeDetailResponse, ChallengeResponse, JoinLeaveResponse, ParticipationStatusResponse } from "./types";
// Import necessary packages
// import {
//   // createChallenge,
//   addDailyLog,
//   checkIfUserIsOwner,
//   checkIfUserIsParticipant,
//   deleteChallenge,
//   getAllChallenges,
//   getChallengeById,
//   getMyChallenges,
//   getPopularChallenge,
//   joinChallenge,
//   leaveChallenge,
//   popularForUnsignedUser,
// } from "./challengesActions";
import challengeService from "../../services/challengeService";


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




const createChallenge = createAsyncThunk<
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

const getAllChallenges = createAsyncThunk<
  ChallangeListResponse
>("challenges/getAllChallenges", async (_, { rejectWithValue }) => {
  try {
    return await challengeService.getAllChallenges();
  } catch (error) {
    return rejectWithValue(handleAsyncError(error, rejectWithValue));
  }
});

const getMyChallenges = createAsyncThunk<
  ChallangeListResponse
>("challenges/getMyChallenges", async (_, { rejectWithValue }) => {
  try {
    return await challengeService.getMyChallenges();
  } catch (error) {
    return rejectWithValue(handleAsyncError(error, rejectWithValue));
  }
});

const getChallengeById = createAsyncThunk<
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

const checkIfUserIsOwner = createAsyncThunk<
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

const checkIfUserIsParticipant = createAsyncThunk<
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

const joinChallenge = createAsyncThunk<JoinLeaveResponse, string>(
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

const leaveChallenge = createAsyncThunk<JoinLeaveResponse, string>(
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

const addDailyLog = createAsyncThunk<
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

const getPopularChallenge = createAsyncThunk<ChallangeListResponse>(
  "challenges/getPopularChallenge",
  async (_, { rejectWithValue }) => {
    try {
      return await challengeService.getPopularChallenge();
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

const popularForUnsignedUser = createAsyncThunk<ChallangeListResponse>(
  "challenges/popularForUnsignedUser",
  async (_, { rejectWithValue }) => {
    try {
      return await challengeService.popularForUnsignedUser();
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);

const deleteChallenge = createAsyncThunk<ChallengeResponse, string>(
  "challenges/deleteChallenge",
  async (challengeId: string, { rejectWithValue }) => {
    try {
      return await challengeService.deleteChallenge(challengeId);
    } catch (error) {
      return rejectWithValue(handleAsyncError(error, rejectWithValue));
    }
  }
);




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
    builder
    .addCase(createChallenge.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createChallenge.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.challenges = [...state.challenges, action.payload.data];
      }
      state.loading = false;
      state.error = null;
      state.message = action.payload.message??"";
    })
    .addCase(createChallenge.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(getAllChallenges.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllChallenges.fulfilled, (state, action) => {
      state.challenges = action.payload.data??[];
      state.loading = false;
      state.error = null;
    })
    .addCase(getAllChallenges.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(getChallengeById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getChallengeById.fulfilled, (state, action) => {
      state.selectedChallenge = action.payload.challenge.data;
      state.isParticipant = action.payload.isParticipant.data??false;
      state.isOwner = action.payload.isOwner.data??false;
      state.loading = false;
      state.error = null;
    })
    .addCase(getChallengeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(getMyChallenges.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(getMyChallenges.fulfilled, (state, action) => {
      state.challenges = action.payload.data??[];
      state.loading = false;
      state.error = null;
    })
    .addCase(getMyChallenges.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(checkIfUserIsParticipant.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(checkIfUserIsParticipant.fulfilled, (state, action) => {
      state.isParticipant = action.payload.data??false;
      state.loading = false;
      state.error = null;
    })
    .addCase(checkIfUserIsParticipant.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(joinChallenge.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(joinChallenge.fulfilled, (state, action) => {
      state.selectedChallenge = action.payload.updatedChallenge.data;
      state.isParticipant = action.payload.isParticipant.data??false;
      state.message = "You have joined the challenge";
      state.loading = false;
      state.error = null;
    })
    .addCase(joinChallenge.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(leaveChallenge.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(leaveChallenge.fulfilled, (state, action) => {
      state.selectedChallenge = action.payload.updatedChallenge.data;
      state.isParticipant = action.payload.isParticipant.data??false;
      state.message = "You have left the challenge";
      state.loading = false;
      state.error = null;
    })
    .addCase(leaveChallenge.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(checkIfUserIsOwner.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(checkIfUserIsOwner.fulfilled, (state, action) => {
      state.isOwner = action.payload.data??false;
      state.loading = false;
      state.error = null;
    })
    .addCase(checkIfUserIsOwner.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(addDailyLog.pending, (state)=> {
      state.loading = false;
      state.error = null;
    })
    .addCase(addDailyLog.fulfilled, (state, action) => {
      state.message = action.payload.message??"";
      state.loading = false;
      state.error = null;
    })
    .addCase(getPopularChallenge.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(getPopularChallenge.fulfilled, (state, action) => {
      state.popularChallenges = action.payload.data??[];
      state.loading = false;
      state.error = null;
    })
    .addCase(getPopularChallenge.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(deleteChallenge.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteChallenge.fulfilled, (state, action) => {
      state.challenges = state.challenges.filter((challenge) => challenge._id !== action.payload.data?._id);
      state.loading = false;
      state.error = null;
    })
    .addCase(deleteChallenge.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    })
    .addCase(popularForUnsignedUser.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(popularForUnsignedUser.fulfilled, (state, action) => {
      state.popularChallengesForUnsignedUser = action.payload.data??[];
      state.loading = false;
      state.error = null;
    })
    .addCase(popularForUnsignedUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    });
  },
});

// Export the reducer
export default challengesSlice.reducer;
// Export the actions generated by the slice
export const { setLoading, setError, setMessage } = challengesSlice.actions;
function handleAsyncError(error: unknown, rejectWithValue: (value: unknown) => RejectWithValue<unknown, unknown>): unknown {
  throw new Error("Function not implemented.");
}

