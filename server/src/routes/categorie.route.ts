import { Application } from "express";
import CategoryController from "../controllers/categorie.controller";

class CategoryRoute {
    constructor(private categoryController: CategoryController) {}

    public configureRoutes(app: Application, baseUrl: string) {
        app.route(`${baseUrl}/categories`)
            .get(this.categoryController.getAll.bind(this.categoryController))
            .post(this.categoryController.create.bind(this.categoryController));
        app.route(`${baseUrl}/categories/:name`)
            .get(this.categoryController.findByName.bind(this.categoryController));
        app.route(`${baseUrl}/categories/:name/challenges`)
            .get(this.categoryController.getChallengesByCategory.bind(this.categoryController));
        app.route(`${baseUrl}/categories/:name/totalParticipants`)
            .get(this.categoryController.getTotalNumberOfParticipantsForCategory.bind(this.categoryController));
        app.route(`${baseUrl}/categories/:name/statusCount`)
            .get(this.categoryController.getChallengesForCategoryPerStatus.bind(this.categoryController));

        app.route(`${baseUrl}/categories/:id`)
            .put(this.categoryController.update.bind(this.categoryController))
            .delete(this.categoryController.delete.bind(this.categoryController))
            .get(this.categoryController.findById.bind(this.categoryController));
    }
}

export default CategoryRoute;