import {UserController} from "../controllers/user.controller";
import {Application} from "express";


class UserRoute {
    constructor(private userController: UserController) {
    }

    public configureRoutes(app: Application, baseUrl: string) {
        app.route(`${baseUrl}/register`)
            .post(this.userController.register.bind(this.userController));

        app.route(`${baseUrl}/login`)
            .post(this.userController.login.bind(this.userController));

        app.route(`${baseUrl}/logout`)
            .post(this.userController.logout.bind(this.userController));

        app.route(`${baseUrl}/users/:id`)
            .get(this.userController.getUser.bind(this.userController))
            .put(this.userController.updateUser.bind(this.userController))
            .delete(this.userController.deleteUser.bind(this.userController));

        app.route(`${baseUrl}/users`)
            .get(this.userController.getUsers.bind(this.userController));

        app.route(`${baseUrl}/users/:id/update`)
            .put(this.userController.updateUser.bind(this.userController));


    }
}

export default UserRoute;
