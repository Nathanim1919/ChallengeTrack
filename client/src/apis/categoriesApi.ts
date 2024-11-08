import { ICategory } from "../interfaces/ICategory";
import { IChallenge, IChallengesCountInfoPerStatus, IChallengesInfoPerStatus } from "../interfaces/IChallenge";
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


const getChallengesByCategory = async (name: string): Promise<ApiResponse<IChallenge[]>> => {
    const response = await apiConfig.get(`/categories/${name}/challenges`);
    return response.data;
} 

const getTotalNumberOfParticipantsForCategory = async (name: string): Promise<ApiResponse<number>> => {
    const response = await apiConfig.get(`/categories/${name}/totalParticipants`);
    return response.data;
}

const getChallengesCountForCategoryPerStatus = async (name: string): Promise<ApiResponse<IChallengesCountInfoPerStatus>> => {
    const response = await apiConfig.get(`/categories/${name}/statusCount`);
    return response.data;
}

const getChallengesForCategoryPerStatus = async (name: string, status: string): Promise<ApiResponse<IChallenge[]>> => {
    const response = await apiConfig.get(`/categories/${name}/challenges/${status}`);
    return response.data;
}


export default {
    createCategory,
    getAllCategories,
    getCategoryByName,
    getChallengesByCategory,
    getTotalNumberOfParticipantsForCategory,
    getChallengesCountForCategoryPerStatus,
    getChallengesForCategoryPerStatus
}