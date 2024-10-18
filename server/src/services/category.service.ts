import { ClientSession } from "mongoose";
import { ICategory } from "../interfaces/ICategory";
import { CategoryRepository } from "../repositories/category.repository";

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

    async addChallenge(categoryName: string, challengeId: string, session?: ClientSession) {
        return this.categoryRepository.addChallenge(categoryName, challengeId, session);
    }

    async removeChallenge(categoryId: string, challengeId: string) {
        return this.categoryRepository.removeChallenge(categoryId, challengeId);
    }

}