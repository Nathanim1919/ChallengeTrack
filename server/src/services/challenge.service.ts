import {Challenge} from "../models/challenge.mode";
import {IChallenge} from "../interfaces/IChallenge";
import {ChallengeRepository} from "../repositories/challenge.repository";
import mongoose from "mongoose";
import {IUser} from "../interfaces/IUser";

class ChallengeService {
    constructor(private challengeRepository: ChallengeRepository) {
    }

    async createChallenge(challengeData: IChallenge): Promise<IChallenge> {
        return this.challengeRepository.createChallenge(challengeData);
    }

    async updateChallenge(id: string, updateData: Partial<IChallenge>): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid challenge ID');
        }
        return this.challengeRepository.updateChallenge(id, updateData);
    }

    async deleteChallenge(id: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid challenge ID');
        }
        return this.challengeRepository.deleteChallenge(id);
    }

    async searchChallenges(filter: any): Promise<IChallenge[] | []> {
        return this.challengeRepository.searchChallenges(filter);
    }

    async findChallengeById(challengeId: string): Promise<IChallenge | null>{
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        return this.challengeRepository.findChallengeById(challengeId);
    }

    async addParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID');
        }
        return this.challengeRepository.addParticipant(challengeId, userId);
    }

    async removeParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID');
        }
        return this.challengeRepository.removeParticipant(challengeId, userId);
    }

    async markChallengeAsCompleted(challengeId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }

        return this.challengeRepository.markChallengeAsCompleted(challengeId);
    }

    async getChallengeParticipants(challengeId: string): Promise<IUser[] | []> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        return this.challengeRepository.getChallengeParticipants(challengeId);
    }
}
