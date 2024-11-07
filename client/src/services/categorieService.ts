import categoriesApi from "../apis/categoriesApi";
import { ICategory } from "../interfaces/ICategory";
import { IChallenge, IChallengesInfoPerStatus } from "../interfaces/IChallenge";
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

const getChallengesByCategory = async (name: string): Promise<ApiResponse<IChallenge[]>> => {
    return await categoriesApi.getChallengesByCategory(name)
}

const getTotalNumberOfParticipantsForCategory = async (name: string): Promise<ApiResponse<number>> => {
    return await categoriesApi.getTotalNumberOfParticipantsForCategory(name);
}


const getChallengesForCategoryPerStatus = async (name: string): Promise<ApiResponse<IChallengesInfoPerStatus>> => {
    return await categoriesApi.getChallengesForCategoryPerStatus(name);
}

export {
    getAllCategories,
    createCategory,
    getCategoryByName,
    getChallengesByCategory,
    getTotalNumberOfParticipantsForCategory,
    getChallengesForCategoryPerStatus
}