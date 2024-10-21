import { Application } from "express";
import LogController from "../controllers/log.controller";
import { verifyUser } from "../middlewares/auth.middleware";

class LogRoute {
  constructor(private logController: LogController) {}

  public configureRoutes(app: Application, baseUrl: string) {
    app
      .route(`${baseUrl}/logs`)
      .all(verifyUser)
      .post(this.logController.createLog.bind(this.logController));
    app
      .route(`${baseUrl}/logs/challenges/:id`)
      .all(verifyUser)
      .get(this.logController.getChallengeLogs.bind(this.logController));
    app
      .route(`${baseUrl}/logs/users/:id`)
      .all(verifyUser)
      .get(this.logController.getUserLogs.bind(this.logController));
    // app
    //   .route(`${baseUrl}/logs/:id`)
    //   .all(verifyUser)
    //   .get(this.logController.getLogById.bind(this.logController))
    //   .put(this.logController.updateLogById.bind(this.logController));
    app
      .route(`${baseUrl}/logs/:id`)
      .all(verifyUser)
      .get(this.logController.getChallengeUserLogs.bind(this.logController));
  }
}

export default LogRoute;
