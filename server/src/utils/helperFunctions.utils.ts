// check completion of a challenge

import {IChallenge} from "../interfaces/IChallenge";

function isChallengeCompleted = (challenge: IChallenge): => {
    if (challenge.status === 'COMPLETED') {
        return true;
    }

    const currentDate = new Date();
    if (currentDate > challenge.endDate) {

        return true;
    }
}
