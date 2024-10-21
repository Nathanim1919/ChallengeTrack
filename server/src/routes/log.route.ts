import { Application } from "express";
import LogController from "../controllers/log.controller";


class LogRoute {
    constructor(private logController: LogController) {}


    public configureRoutes(app: Application, baseUrl: string) {
        app.route(`${baseUrl}/logs`)
            .post(this.logController.createLog.bind(this.logController));
        app.route(`${baseUrl}/logs/:id`)
            .get(this.logController.getLogById.bind(this.logController))
            .put(this.logController.updateLogById.bind(this.logController));
        app.route(`${baseUrl}/logs/challenges/:id`)
            .get(this.logController.getChallengeLogs.bind(this.logController));
        app.route(`${baseUrl}/logs/users/:id`)
            .get(this.logController.getUserLogs.bind(this.logController));
        app.route(`${baseUrl}/logs/challenges/:id/users/:userId`)
            .get(this.logController.getChallengeUserLogs.bind(this.logController));
    }
}

export default LogRoute;