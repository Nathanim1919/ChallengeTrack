import categoriesApi from "../apis/categoriesApi";
import { ICategory } from "../interfaces/ICategory";
import { ApiResponse } from "../interfaces/ICommon";


const getAllCategories = async (): Promise<ApiResponse<ICategory[]>> => {
    return await categoriesApi.getAllCategories();
};

const createCategory = async (categoryData: Partial<ICategory>) => {
    return await categoriesApi.createCategory(categoryData);
};

const getCategoryByName = async (name: string): Promise<ApiResponse<ICategory>> => {
    return await categoriesApi.getCategoryByName(name);
};


export {
    getAllCategories,
    createCategory,
    getCategoryByName
}