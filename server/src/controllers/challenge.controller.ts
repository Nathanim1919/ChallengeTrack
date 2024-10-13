import ChallengeService from "../services/challenge.service";
import {Request, Response} from "express";
import {ApiResponse} from "../interfaces/ICommon";
import {IChallenge} from "../interfaces/IChallenge";
import {formatError, formatResponse} from "../utils/responseFormat";

class ChallengeController {
    constructor(private challengeService: ChallengeService) {
    }

    async createChallenge(req: Request<{}, {}, IChallenge>, res: Response): Promise<Response<ApiResponse<IChallenge>>> {
        try {
            const { body } = req;
            const { userId } = req;

            const challenge = await this.challengeService.createChallenge(body, userId!);
            return res.status(201).json(formatResponse(challenge, 'Challenge created successfully'));
        } catch(error){
            return res.status(400).json(formatError("Failed to create challenge"));
        }
    }


    async updateChallenge(req: Request, res: Response):Promise<Response<ApiResponse<IChallenge>>>{
        try{
            const challenge = await this.challengeService.updateChallenge(req.params.id, req.body);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }
            return res.status(200).json(formatResponse(challenge, 'Challenge updated successfully'));
        }catch(error){
            return res.status(400).json(formatError("Failed to update challenge"));
        }
    }


    async deleteChallenge(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenge = await this.challengeService.deleteChallenge(req.params.id);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }
            return res.status(200).json(formatResponse(challenge, 'Challenge deleted successfully'));
        }catch (error){
            return res.status(400).json(formatError("Failed to delete challenge"));
        }
    }

    async searchChallenges(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenges = await this.challengeService.searchChallenges(req.query);
            return res.status(200).json(formatResponse(challenges, 'Challenges fetched successfully'));
        }catch (error){
            return res.status(400).json(formatError("Failed to search challenges"));
        }
    }


    async findChallengeById(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenge = await this.challengeService.findChallengeById(req.params.id);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }
            return res.status(200).json(formatResponse(challenge, 'Challenge fetched successfully'));
        }catch (error){
            return res.status(400).json(formatError("Failed to fetch challenge"));
        }
    }

    async checkIfUserIsOwner(req: Request, res: Response): Promise<Response<ApiResponse<boolean>>>{
        try {
            const isOwner = await this.challengeService.checkIfUserIsOwner(req.params.id, req.userId!);
            return res.status(200).json(formatResponse(isOwner, 'User is owner'));
        } catch(error){
            return res.status(400).json(formatError("Failed to check if user is owner"));
        }
    }


    async joinChallenge(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenge = await this.challengeService.addParticipant(req.params.id, req.userId!);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }

            return res.status(200).json(formatResponse(challenge, 'Participant added successfully'));
        } catch(error){
            return res.status(400).json(formatError("Failed to add participant"));
        }
    }

    async leaveChallenge(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenge = await this.challengeService.removeParticipant(req.params.id, req.userId!);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }
            return res.status(200).json(formatResponse(challenge, 'Participant removed successfully'));
        } catch(error){
            return res.status(400).json(formatError("Failed to remove participant"));
        }
    }

    async getChallengeParticipants(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const participants = await this.challengeService.getChallengeParticipants(req.params.id);
            return res.status(200).json(formatResponse(participants, 'Participants fetched successfully'));
        } catch(error){
            return res.status(400).json(formatError("Failed to fetch participants"));
        }
    }

    async markChallengeAsCompleted(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenge = await this.challengeService.markChallengeAsCompleted(req.params.id);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }
            return res.status(200).json(formatResponse(challenge, 'Challenge marked as completed'));
        } catch(error){
            return res.status(400).json(formatError("Failed to mark challenge as completed"));
        }
    }


    async saveDailyLogChallengeProgress(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenge = await this.challengeService.saveDailyLogChallengeProgress(req.body.challengeId, req.body.userId, req.body.logs, req.body.images, req.body.day);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }
            return res.status(200).json(formatResponse(challenge, 'Great! You Got Points for your progress'));
        } catch(error){
            return res.status(400).json(formatError("Failed to save challenge progress"));
        }
    }

    async checkIfUserIsParticipant(req: Request, res: Response): Promise<Response<ApiResponse<boolean>>>{
        try {
            const isParticipant = await this.challengeService.checkIfUserIsParticipant(req.params.id, req.userId!);
            return res.status(200).json(formatResponse(isParticipant, 'User is participant'));
        } catch(error){
            return res.status(400).json(formatError("Failed to check if user is participant"));
        }
    }
}


export default ChallengeController;
