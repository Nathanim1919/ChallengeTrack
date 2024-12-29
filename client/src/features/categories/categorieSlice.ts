import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/ICategory";
import { createCategory, fetchCategories, getCategorieByName, getChallengesByCategory, getChallengesCountForCategoryPerStatus, getChallengesPerStatusForCategory, getTotalNumberOfParticipantsForCategory } from "./categorieActions";
import { ApiResponse } from "../../interfaces/ICommon";
import { IChallenge, IChallengesCountInfoPerStatus } from "../../interfaces/IChallenge";


type initialStateType = {
    categories: ICategory[],
    challenges: IChallenge[],
    challStatusPerCategoryCount: IChallengesCountInfoPerStatus | null,
    totalParticipants: number,
    selectedCategory: ICategory | null,
    loading: boolean,
    error: string | null
}


const initialState: initialStateType = {
    categories: [],
    challenges: [],
    challStatusPerCategoryCount: null,
    totalParticipants: 0,
    selectedCategory: null,
    loading: false,
    error: null
}


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }, 
        setSelectedCategory(state, action: PayloadAction<ICategory>) {
            state.selectedCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ApiResponse<ICategory[]>>) => {
            state.categories = action.payload.data??[]; // nullish coalescing operator, if data is null or undefined, return an empty array
            state.loading = false;
            state.error = null;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(createCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createCategory.fulfilled, (state, action) => {
            state.categories.push(action.payload);
            state.loading = false;
            state.error = null;
        })
        .addCase(createCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(getCategorieByName.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCategorieByName.fulfilled, (state, action) => {
            state.selectedCategory = action.payload.data;
            state.challenges = action.payload.data?.challenges??[];
            state.loading = false;
            state.error = null;
        })
        .addCase(getCategorieByName.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(getChallengesByCategory.pending, (state) => { 
            state.loading = true;
            state.error = null;
        })
        .addCase(getChallengesByCategory.fulfilled, (state, action) => {
            state.challenges = action.payload.data??[];
            state.loading = false;
            state.error = null;
        })
        .addCase(getChallengesByCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(getTotalNumberOfParticipantsForCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getTotalNumberOfParticipantsForCategory.fulfilled, (state, action) => {
            state.totalParticipants = action.payload.data??0;
            state.loading = false;
            state.error = null;
        })
        .addCase(getTotalNumberOfParticipantsForCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(getChallengesCountForCategoryPerStatus.pending, (state) => {
            state.loading = true;
            state.error = null;
        } )
        .addCase(getChallengesCountForCategoryPerStatus.fulfilled, (state, action) => {
            state.challStatusPerCategoryCount = action.payload.data??null;
            state.loading = false;
            state.error = null;
        })
        .addCase(getChallengesCountForCategoryPerStatus.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(getChallengesPerStatusForCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getChallengesPerStatusForCategory.fulfilled, (state, action) => {
            state.challenges = action.payload.data??[];
            state.loading = false;
            state.error = null;
        })
        .addCase(getChallengesPerStatusForCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})


export const { setLoading, setError, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;