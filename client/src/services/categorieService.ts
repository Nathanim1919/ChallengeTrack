import categoriesApi from "../apis/categoriesApi";
import { ICategory } from "../interfaces/ICategory";
import { IChallenge, IChallengesCountInfoPerStatus, IChallengesInfoPerStatus } from "../interfaces/IChallenge";
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


const getChallengesCountForCategoryPerStatus = async (name: string): Promise<ApiResponse<IChallengesCountInfoPerStatus>> => {
    return await categoriesApi.getChallengesCountForCategoryPerStatus(name);
}


const getChallengesPerStatusForCategory = async (name: string, status: string): Promise<ApiResponse<IChallenge[]>> => {
    return await categoriesApi.getChallengesForCategoryPerStatus(name, status);
}

export {
    getAllCategories,
    createCategory,
    getCategoryByName,
    getChallengesByCategory,
    getTotalNumberOfParticipantsForCategory,
    getChallengesCountForCategoryPerStatus,
    getChallengesPerStatusForCategory
}