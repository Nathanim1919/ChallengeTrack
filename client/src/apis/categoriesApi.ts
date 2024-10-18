import { ICategory } from "../interfaces/ICategory";
import { ApiResponse } from "../interfaces/ICommon";
import apiConfig from "./apiConfig";

const createCategory = async (categoryData: Partial<ICategory>) => {
    const response = await apiConfig.post("/categories", categoryData);
    return response.data;
};


const getAllCategories = async ():Promise<ApiResponse<ICategory[]>> => {
    const response = await apiConfig.get("/categories");
    return response.data;
}

const getCategoryByName = async (name: string): Promise<ApiResponse<ICategory>> => {
    const response = await apiConfig.get(`/categories/${name}`);
    return response.data;
};


export default {
    createCategory,
    getAllCategories,
    getCategoryByName
}