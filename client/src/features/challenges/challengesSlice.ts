import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChallenge } from "../../interfaces/IChallenge";
import { createChallenge, getAllChallenges } from "./challengesActions";

interface ChallengesState {
    challenges: IChallenge[];
    loading: boolean;
    error: string | null;
}

const initialState: ChallengesState = {
    challenges: [],
    loading: false,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(createChallenge.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createChallenge.fulfilled, (state, action: PayloadAction<IChallenge>) => {
                state.challenges.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(createChallenge.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to create challenge";
            })
            .addCase(getAllChallenges.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllChallenges.fulfilled, (state, action: PayloadAction<IChallenge[]>) => {
                state.challenges = action.payload;
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