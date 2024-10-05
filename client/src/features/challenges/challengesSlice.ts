import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChallenge } from "../../interfaces/IChallenge";
import { createChallenge, getAllChallenges } from "./challengesActions";

interface ChallengesState {
    challenges: IChallenge[];
    loading: boolean;
    message: string;
    error: string | null;
}

interface ChallengesResponse {
    success: boolean;
    data: IChallenge[];
    message: string;
}


const initialState: ChallengesState = {
    challenges: [],
    loading: false,
    message: "",
    error: null,
};

const challengesSlice = createSlice({
    name: "challenges",
    initialState,
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
            .addCase(getAllChallenges.fulfilled, (state, action: PayloadAction<ChallengesResponse>) => {
                state.challenges = action.payload.data;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAllChallenges.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch challenges";
            });
    },
});

export const { setLoading, setError } = challengesSlice.actions;
export default challengesSlice.reducer;