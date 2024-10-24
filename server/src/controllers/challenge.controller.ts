import ChallengeService from "../services/challenge.service";
import {Request, Response} from "express";
import {ApiResponse} from "../interfaces/ICommon";
import {IChallenge} from "../interfaces/IChallenge";
import {formatError, formatResponse} from "../utils/responseFormat";
import { ILog } from "../interfaces/ILogs";

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

    async getChallengesUserCreatedOrParticipated(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge[]>>>{
        try {
            const challenges = await this.challengeService.getChallengesUserCreatedOrParticipated(req.userId!);
            return res.status(200).json(formatResponse(challenges, 'Challenges fetched successfully'));
        }catch (error){
            return res.status(400).json(formatError("Failed to search challenges"));
        }
    }

    async getMyChallenges(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge[]>>>{
        try {
            const challenges = await this.challengeService.getMyChallenges(req.userId!);
            return res.status(200).json(formatResponse(challenges, 'Challenges fetched successfully'));
        }catch (error){
            return res.status(400).json(formatError("Failed to search challenges"));
        }
    }

    

    async getAllChallenges(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge[]>>>{
        try {
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;
            console.log(page, limit);
            const challenges = await this.challengeService.getAllChallenges(req.userId!, page, limit);
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

    async checkIfUserIsOwner(req: Request, res: Response): Promise<Response<ApiResponse<boolean>>> {
        try {
            const isOwner = await this.challengeService.checkIfUserIsOwner(req.params.id, req.userId!);
            const message = isOwner ? 'User is owner' : 'User is not owner';
            return res.status(200).json(formatResponse(isOwner, message));
        } catch (error) {
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

    async getChallengeLogsForUser(req:Request, res:Response): Promise<Response<ApiResponse<ILog[]>>>{
        try {
            const logs = await this.challengeService.getChallengeLogsForUser(req.params.id, req.userId!);
            return res.status(200).json(formatResponse(logs, 'Logs fetched successfully'));
        } catch(error){
            return res.status(400).json(formatError("Failed to fetch logs"));
        }
    }


    async getPopularChallenge(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge[]>>>{
        try {
            const challenges = await this.challengeService.getPopularChallenge(req.userId!);
            return res.status(200).json(formatResponse(challenges, 'Popular challenges fetched successfully'));
        } catch(error){
            console.log(error);
            return res.status(400).json(formatError("Failed to fetch popular challenges"));
        }
    }


    async saveDailyLogChallengeProgress(req: Request, res: Response): Promise<Response<ApiResponse<IChallenge>>>{
        try {
            const challenge = await this.challengeService.saveDailyLogChallengeProgress(req.params.id, req.userId!, req.body.details);
            console.log(challenge);
            if(!challenge){
                return res.status(404).json(formatError("Challenge not found"));
            }
            return res.status(200).json(formatResponse(challenge, 'Great! You Got Points for your progress'));
        } catch(error){
            console.log("Data sent: ",req.params, req.userId!, req.body.details);
            console.log(error);
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
