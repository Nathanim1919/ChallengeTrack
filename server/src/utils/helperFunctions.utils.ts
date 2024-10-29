// check completion of a challenge

import {IChallenge} from "../interfaces/IChallenge";
import { Log } from "../models/log.model";

// function isChallengeCompleted = (challenge: IChallenge): => {
//     if (challenge.status === 'COMPLETED') {
//         return true;
//     }

//     const currentDate = new Date();
//     if (currentDate > challenge.endDate) {

//         return true;
//     }
// }


// function to initialize challenge logs, this function will be called when a user starts a challenge

export const initializeChallengeLogs = async (userId: string, challengeId:string, challengeDuration:number) =>{
    const logs = [];
    for (let day = 1; day <= challengeDuration; day++) {
        logs.push({
            user: userId,
            challenge: challengeId,
            details: "Challenge started",
            days: day,
        });
    }

    const insertedLogs = await Log.insertMany(logs);
    return insertedLogs;
}




