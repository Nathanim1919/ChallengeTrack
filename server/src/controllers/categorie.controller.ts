import { Response, Request } from "express";
import { CategoryService } from "../services/category.service";
import { ApiResponse } from "../interfaces/ICommon";
import { ICategory } from "../interfaces/ICategory";

class CategoryController {
  constructor(private categoryService: CategoryService) {
  }

  async getAll(req: Request, res: Response): Promise<Response<ApiResponse<ICategory[]>>> {
    try {
      const categories = await this.categoryService.getAllCategories();
      return res.status(200).json({ data: categories, message: "Categories fetched successfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to fetch categories" });
    }
  }

  async create(req: Request, res: Response): Promise<Response<ApiResponse<ICategory>>> {
    const { name, description } = req.body;
    try {
      const category = await this.categoryService.createCategory({ name, description });
      return res.status(201).json({ data: category, message: "Category created successfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to create category" });
    }
  }

    async update(req: Request, res: Response): Promise<Response<ApiResponse<ICategory>>> {
        const { name, description } = req.body;
        try {
        const category = await this.categoryService.updateCategory(req.params.id, { name, description });
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        return res.status(200).json({ data: category, message: "Category updated successfully" });
        } catch (error) {
        return res.status(400).json({ error: "Failed to update category" });
        }
    }

    async delete(req: Request, res: Response): Promise<Response<ApiResponse<ICategory>>> {
        try {
        const category = await this.categoryService.deleteCategory(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        return res.status(200).json({ data: category, message: "Category deleted successfully" });
        } catch (error) {
        return res.status(400).json({ error: "Failed to delete category" });
        }
    }

    // async search(req: Request, res: Response): Promise<Response<ApiResponse<ICategory>>>{
    //     try {
    //         const categories = await this.categoryService.searchCategories(req.query);
    //         return res.status(200).json({ data: categories, message: "Categories fetched successfully" });
    //     } catch (error) {
    //         return res.status(400).json({ error: "Failed to search categories" });
    //     }
    // }

    async findById(req: Request, res: Response): Promise<Response<ApiResponse<ICategory>>>{
        try {
        const category = await this.categoryService.findCategoryById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        return res.status(200).json({ data: category, message: "Category fetched successfully" });
        } catch (error) {
        return res.status(400).json({ error: "Failed to find category" });
        }
    }
}


export default CategoryController;