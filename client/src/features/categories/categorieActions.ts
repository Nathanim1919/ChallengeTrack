import { createAsyncThunk } from '@reduxjs/toolkit';
import {categoryServices} from '../../services/index.ts';


// Define the thunk for fetching all categories
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            return await categoryServices.getAllCategories();
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

// Define the thunk for creating a new category
export const createCategory = createAsyncThunk(
    'categories/createCategory',
    async (categoryData: { name: string }, { rejectWithValue }) => {
        try {
            return await categoryServices.createCategory(categoryData);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);