import { ClientSession } from "mongoose";
import { ICategory } from "../interfaces/ICategory";
import { Category } from "../models/category.mode";
import { IChallenge } from "../interfaces/IChallenge";
import { challengeStatus } from "../utils/enum.utils";

export class CategoryRepository {
  async getAllCategories(): Promise<ICategory[]> {
    // sort by number of challenges in descending order
    return Category.find().sort({ challenges: -1 }).exec();
  }
  async createCategory(categoryData: Partial<ICategory>): Promise<ICategory> {
    const category = new Category(categoryData);
    return category.save();
  }

  async updateCategory(
    id: string,
    updateData: Partial<ICategory>
  ): Promise<ICategory | null> {
    return Category.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async deleteCategory(id: string): Promise<ICategory | null> {
    return Category.findByIdAndDelete(id).exec();
  }

  async searchCategories(filter: string): Promise<ICategory[] | []> {
    return await Category.find({
      name: { $regex: filter, $options: "i" },
    }).exec();
  }

  async findCategoryById(categoryId: string): Promise<ICategory | null> {
    return Category.findById(categoryId).exec();
  }

  async getCategoryByName(name: string): Promise<ICategory | null> {
    return Category.findOne({ name }).populate("challenges").exec();
  }

  async addChallenge(
    categoryName: string,
    challengeId: string,
    session?: ClientSession
  ): Promise<ICategory | null> {
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

  async removeChallenge(
    categoryId: string,
    challengeId: string
  ): Promise<ICategory | null> {
    return Category.findOneAndUpdate(
      { name: categoryId },
      {
        $pull: { challenges: challengeId },
      },
      { new: true }
    ).exec();
  }

  async getChallengesByCategory(categoryName: string): Promise<any[] | null> {
    const category = await Category.findOne({ name: categoryName }).populate({
      path: "challenges",
      select: "title challenges participants createdBy status",
      populate: {
        path: "createdBy",
        select: "username email",
      },
    });

    if (!category || !category.challenges) return null;

    return category.challenges;
  }

  async getTotalNumberOfParticipantsForCategory(
    categoryName: string
  ): Promise<number> {
    const category = await Category.findOne({ name: categoryName })
      .populate("challenges")
      .exec();
    if (!category || !category.challenges) return 0;
    let totalParticipants = 0;
    category.challenges.forEach((challenge: any) => {
      totalParticipants += challenge.participants.length;
    });
    return totalParticipants;
  }

  async getChallengesCountForCategoryPerStatus(categoryName: string): Promise<{
    completedChallenges: number;
    ongoingChallenges: number;
    upcomingChallenges: number;
  } | null> {
    const category = await Category.findOne({ name: categoryName })
      .populate("challenges")
      .exec();
    if (!category || !category.challenges) return null;

    // categorize challenges based on status
    const completedChallenges = category.challenges.filter(
      (challenge: any) => challenge.status === challengeStatus.COMPLETED
    ).length;
    const ongoingChallenges = category.challenges.filter(
      (challenge: any) => challenge.status === challengeStatus.ONGOING
    ).length;
    const upcomingChallenges = category.challenges.filter(
      (challenge: any) => challenge.status === challengeStatus.PENDING
    ).length;

    return {
      completedChallenges,
      ongoingChallenges,
      upcomingChallenges,
    };
  }

  async getChallengesPerStatusForCategory(
    categoryName: string,
    status: keyof typeof challengeStatus
  ): Promise<any[] | null> {
    const category = await Category.findOne({ name: categoryName })
      .populate("challenges")
      .exec();
    if (!category || !category.challenges) return null;

    // categorize challenges based on status
    const challenges = category.challenges.filter(
      (challenge: any) => challenge.status === status.toUpperCase()
    );
   
    return challenges;
  }
}
