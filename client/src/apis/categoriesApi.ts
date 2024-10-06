import { ICategory } from "../interfaces/ICategory";
import apiConfig from "./apiConfig";

const createCategory = async (categoryData: Partial<ICategory>) => {
    const response = await apiConfig.post("/categories", categoryData);
    return response.data;
};


const getAllCategories = async (): Promise<ICategory[]> => {
    const response = await apiConfig.get("/categories");
    return response.data;
}


export default {
    createCategory,
    getAllCategories
}