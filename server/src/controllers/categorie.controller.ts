import { Response, Request } from "express";
import { CategoryService } from "../services/category.service";
import { ApiResponse } from "../interfaces/ICommon";
import { ICategory } from "../interfaces/ICategory";

class CategoryController {
  constructor(private categoryService: CategoryService) {}

  async getAll(
    req: Request,
    res: Response
  ): Promise<Response<ApiResponse<ICategory[]>>> {
    try {
      const categories = await this.categoryService.getAllCategories();
      return res.status(200).json({
        success: true,
        data: categories,
        message: "Categories fetched successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Failed to fetch categories",
        errorCode: "FETCH_CATEGORIES_ERROR",
      });
    }
  }

  async create(
    req: Request,
    res: Response
  ): Promise<Response<ApiResponse<ICategory>>> {
    const { name, description } = req.body;
    try {
      const category = await this.categoryService.createCategory({
        name,
        description,
      });
      return res
        .status(201)
        .json({ data: category, message: "Category created successfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to create category" });
    }
  }

  async update(
    req: Request,
    res: Response
  ): Promise<Response<ApiResponse<ICategory>>> {
    const { name, description } = req.body;
    try {
      const category = await this.categoryService.updateCategory(
        req.params.id,
        { name, description }
      );
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res
        .status(200)
        .json({ data: category, message: "Category updated successfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to update category" });
    }
  }

  async delete(
    req: Request,
    res: Response
  ): Promise<Response<ApiResponse<ICategory>>> {
    try {
      const category = await this.categoryService.deleteCategory(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res
        .status(200)
        .json({ data: category, message: "Category deleted successfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to delete category" });
    }
  }

  async findById(
    req: Request,
    res: Response
  ): Promise<Response<ApiResponse<ICategory>>> {
    try {
      const category = await this.categoryService.findCategoryById(
        req.params.id
      );
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res
        .status(200)
        .json({ data: category, message: "Category fetched successfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to find category" });
    }
  }

  async findByName(
    req: Request,
    res: Response
  ): Promise<Response<ApiResponse<ICategory>>> {
    try {
      const category = await this.categoryService.findCategoryByName(
        req.params.name.replace(/-/g, " ")
      );
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res
        .status(200)
        .json({ data: category, message: "Category fetched successfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to find category" });
    }
  }

  async getChallengesByCategory(req: Request, res: Response) {
    try {
      const challenges = await this.categoryService.getChallengesByCategory(
        req.params.name
      );
      return res.status(200).json({
        success: true,
        data: challenges,
        message: "Challenges fetched successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Failed to fetch challenges",
        errorCode: "FETCH_CHALLENGES_ERROR",
      });
    }
  }

  async getTotalNumberOfParticipantsForCategory(req: Request, res: Response) {
    try {
      const totalParticipants =
        await this.categoryService.getTotalNumberOfParticipantsForCategory(
          req.params.name
        );
      return res.status(200).json({
        success: true,
        data: totalParticipants,
        message: "Total number of participants fetched successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Failed to fetch total number of participants",
        errorCode: "FETCH_TOTAL_PARTICIPANTS_ERROR",
      });
    }
  }

  async getChallengesForCategoryPerStatus(req: Request, res: Response) {
    try {
      const challengesCountPerStatus =
        await this.categoryService.getChallengesForCategoryPerStatus(
          req.params.name
        );
      return res.status(200).json({
        success: true,
        data: challengesCountPerStatus,
        message: "Challenges fetched successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Failed to fetch challenges",
        errorCode: "FETCH_CHALLENGES_ERROR",
      });
    }
  }
}

export default CategoryController;
