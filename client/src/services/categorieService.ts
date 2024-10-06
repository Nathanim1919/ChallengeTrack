import categoriesApi from "../apis/categoriesApi";
import { ICategory } from "../interfaces/ICategory";


const getAllCategories = async () => {
    return await categoriesApi.getAllCategories();
};

const createCategory = async (categoryData: Partial<ICategory>) => {
    return await categoriesApi.createCategory(categoryData);
};


export {
    getAllCategories,
    createCategory
}