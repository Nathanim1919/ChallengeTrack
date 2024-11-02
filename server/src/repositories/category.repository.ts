import { ClientSession } from "mongoose";
import { ICategory } from "../interfaces/ICategory";
import { Category } from "../models/category.mode";


export class CategoryRepository {
    async getAllCategories(): Promise<ICategory[]> {
        // sort by number of challenges in descending order
        return Category.find().sort({challenges: -1}).exec();
    }
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

    async searchCategories(filter: string): Promise<ICategory[] | []> {
        return await Category.find({ name: { $regex: filter, $options: 'i' } }).exec();
    }

    async findCategoryById(categoryId: string): Promise<ICategory | null> {
        return Category.findById(categoryId).exec();
    }

    async getCategoryByName(name: string): Promise<ICategory | null> {
        return Category.findOne({ name }).populate('challenges').exec();
    }

    async addChallenge(categoryName: string, challengeId: string, session?: ClientSession): Promise<ICategory | null> {
        if (session) {
            return Category.findOneAndUpdate(
                { name: categoryName },
                { $addToSet: { challenges: challengeId } },
                { session, new: true }
            ).exec();
        }
        return Category.findOneAndUpdate(
            { name: categoryName },
            { $addToSet: { challenges: challengeId } },
            { new: true }
        ).exec();
    }

    async removeChallenge(categoryId: string, challengeId: string): Promise<ICategory | null> {
        return Category.findOneAndUpdate({name: categoryId}, {
            $pull: {challenges: challengeId}
        }, {new: true}).exec();
    }
}


