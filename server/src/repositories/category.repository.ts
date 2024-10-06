import { ClientSession } from "mongoose";
import { ICategory } from "../interfaces/ICategory";
import { Category } from "../models/category.mode";


export class CategoryRepository {
    async createCategory(categoryData: Partial<ICategory>): Promise<ICategory> {
        const category = new Category(categoryData);
        return category.save();
    }

    async updateCategory(id: string, updateData: Partial<ICategory>): Promise<ICategory | null> {
        return Category.findByIdAndUpdate(id, updateData, {new: true}).exec();
    }

    async deleteCategory(id: string): Promise<ICategory | null> {
        return Category.findByIdAndDelete(id).exec();
    }

    async searchCategories(filter: ICategory): Promise<ICategory[] | []> {
        return await Category.find(filter).exec();
    }

    async findCategoryById(categoryId: string): Promise<ICategory | null> {
        return Category.findById(categoryId).exec();
    }

    async addChallenge(categoryId: string, challengeId: string, session?: ClientSession): Promise<ICategory | null> {
        if (session) {
            return Category.findByIdAndUpdate(categoryId, {
                $addToSet: {challenges: challengeId}
            }, {session}).exec();
        }
        return Category.findByIdAndUpdate(categoryId, {
            $addToSet: {challenges: challengeId}
        }, {new: true}).exec();
    }

    async removeChallenge(categoryId: string, challengeId: string): Promise<ICategory | null> {
        return Category.findByIdAndUpdate(categoryId, {
            $pull: {challenges: challengeId}
        }, {new: true}).exec();
    }
}


