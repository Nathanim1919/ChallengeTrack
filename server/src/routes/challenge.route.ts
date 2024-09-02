import { Application } from 'express';
import ChallengeController from "../controllers/challenge.controller";

class ChallengeRoute {
    constructor(private challengeController: ChallengeController) {
    }

    public configureRoutes(app: Application, baseUrl: string) {
        app.route(`${baseUrl}/challenges`)
            .post(this.challengeController.createChallenge.bind(this.challengeController))
            .get(this.challengeController.searchChallenges.bind(this.challengeController));

        app.route(`${baseUrl}/challenges/:id`)
            .put(this.challengeController.updateChallenge.bind(this.challengeController))
            .delete(this.challengeController.deleteChallenge.bind(this.challengeController))
            .get(this.challengeController.findChallengeById.bind(this.challengeController));

        app.route(`${baseUrl}/challenges/:id/logs`)
            .post(this.challengeController.saveDailyLogChallengeProgress.bind(this.challengeController));

        app.route(`${baseUrl}/challenges/:id/participants`)
            .post(this.challengeController.addParticipant.bind(this.challengeController))
            .get(this.challengeController.getChallengeParticipants.bind(this.challengeController))
            .delete(this.challengeController.removeParticipant.bind(this.challengeController));

        app.route(`${baseUrl}/challenges/:id/complete`)
            .put(this.challengeController.markChallengeAsCompleted.bind(this.challengeController));
    }

}

export default ChallengeRoute;
