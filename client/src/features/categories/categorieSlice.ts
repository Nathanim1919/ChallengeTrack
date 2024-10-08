import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/ICategory";
import { createCategory, fetchCategories } from "./categorieActions";
import { ApiResponse } from "../../interfaces/ICommon";


type initialStateType = {
    categories: ICategory[],
    loading: boolean,
    error: string | null
}


const initialState: initialStateType = {
    categories: [],
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
    }
})


export const { setLoading, setError } = categorySlice.actions;
export default categorySlice.reducer;