import {UserController} from "../controllers/user.controller";


class UserRoute {
    constructor(private userController: UserController) {
    }

    public configureRoutes(app: any) {
        app.route('/register')
            .post(this.userController.register.bind(this.userController));

        app.route('/login')
            .post(this.userController.login.bind(this.userController));
    }
}

export default UserRoute;
