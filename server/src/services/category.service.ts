import { ClientSession } from "mongoose";
import { ICategory } from "../interfaces/ICategory";
import { CategoryRepository } from "../repositories/category.repository";
import { IChallenge } from "../interfaces/IChallenge";

export class CategoryService {
    constructor(private categoryRepository: CategoryRepository) {
    }
    async getAllCategories(): Promise<ICategory[]> {
        return this.categoryRepository.getAllCategories();
    }
    async createCategory(categoryData: Partial<ICategory>): Promise<ICategory> {
        return this.categoryRepository.createCategory(categoryData);
    }
    async updateCategory(id: string, updateData: Partial<ICategory>): Promise<ICategory | null> {
        return this.categoryRepository.updateCategory(id, updateData);
    }
    async deleteCategory(id: string): Promise<ICategory | null> {
        return this.categoryRepository.deleteCategory(id);
    }
    async searchCategories(filter: string): Promise<ICategory[] | []> {
        return this.categoryRepository.searchCategories(filter);
    }
    async findCategoryById(categoryId: string): Promise<ICategory | null> {
        return this.categoryRepository.findCategoryById(categoryId);
    }

    async findCategoryByName(name: string): Promise<ICategory | null> {
        return this.categoryRepository.getCategoryByName(name);
    }

    async getChallengesByCategory(categoryName: string): Promise<string[] | null> {
        return this.categoryRepository.getChallengesByCategory(categoryName);
    }

    async getTotalNumberOfParticipantsForCategory(categoryName: string): Promise<number> {
        return this.categoryRepository.getTotalNumberOfParticipantsForCategory(categoryName);
    }

    async getChallengesForCategoryPerStatus(categoryName: string): Promise<{ completedChallenges: number; ongoingChallenges: number; upcomingChallenges: number; } | null> {
        return this.categoryRepository.getChallengesForCategoryPerStatus(categoryName);
    }

    async addChallenge(categoryName: string, challengeId: string, session?: ClientSession) {
        return this.categoryRepository.addChallenge(categoryName, challengeId, session);
    }

    async removeChallenge(categoryId: string, challengeId: string) {
        return this.categoryRepository.removeChallenge(categoryId, challengeId);
    }

}