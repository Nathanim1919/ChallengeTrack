import {Challenge} from "../models/challenge.mode";
import {IChallenge} from "../interfaces/IChallenge";
import {ChallengeRepository} from "../repositories/challenge.repository";
import mongoose from "mongoose";
import {IUser} from "../interfaces/IUser";
import {formatError} from "../utils/responseFormat";

class ChallengeService {
    constructor(private challengeRepository: ChallengeRepository) {
    }

    async createChallenge(challengeData: IChallenge): Promise<IChallenge> {
        try{
            return await this.challengeRepository.createChallenge(challengeData);
        }catch(error){
            throw new Error('Failed to create challenge');
        }
    }

    async updateChallenge(id: string, updateData: Partial<IChallenge>): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid challenge ID');
        }
        try{
            return await this.challengeRepository.updateChallenge(id, updateData);
        }catch(error){
            throw new Error('Failed to update challenge');
        }
    }

    async deleteChallenge(id: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid challenge ID');
        }
        try{
            return await this.challengeRepository.deleteChallenge(id);
        }catch(error){
            throw new Error('Failed to delete challenge');
        }
    }

    async searchChallenges(filter: any): Promise<IChallenge[] | []> {
        try {
            return await this.challengeRepository.searchChallenges(filter);
        } catch (error) {
            throw new Error('Failed to search challenges');
        }
    }

    async findChallengeById(challengeId: string): Promise<IChallenge | null>{
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        try{
            return this.challengeRepository.findChallengeById(challengeId);
        }catch(error){
            throw new Error('Failed to find challenge');
        }
    }

    async addParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID format');
        }
        return this.challengeRepository.addParticipant(challengeId, userId);
    }

    async removeParticipant(challengeId: string, userId: string): Promise<IChallenge | null> {
        if (!mongoose.Types.ObjectId.isValid(challengeId)) {
            throw new Error('Invalid challenge ID');
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID format');
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


export default ChallengeService;
