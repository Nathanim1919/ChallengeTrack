import {Challenge} from "../models/challenge.mode";
import {IChallenge} from "../interfaces/IChallenge";
import {ChallengeRepository} from "../repositories/challenge.repository";

class ChallengeService {
    constructor(private challengeRepository: ChallengeRepository) {
    }

    async createChallenge(challengeData: IChallenge): Promise<IChallenge> {
        return this.challengeRepository.createChallenge(challengeData);
    }

}
