import LogService from "../services/log.service";
import { Request, Response } from "express";

class LogController {
    constructor(private logService: LogService) {}
    
    async getChallengeLogs(req: Request, res: Response) {
        const logs = await this.logService.getChallengeLogs(req.params.id);
        return res.json(logs);
    }
    
    async createLog(req: Request, res: Response) {
        const log = await this.logService.createLog(req.body);
        return res.json(log);
    }

    async getChallengeUserLogs(req: Request, res: Response) {
        const logs = await this.logService.getChallengeUserLogs(req.params.id, req.userId!);
        return res.json(logs);
    }

    async getUserLogs(req: Request, res: Response) {
        const logs = await this.logService.getUserLogs(req.userId!);
        return res.json(logs);
    }

    async getLogById(req: Request, res: Response) {
        const log = await this.logService.getLogById(req.params.id);
        return res.json(log);
    }

    async updateLogById(req: Request, res: Response) {
        const log = await this.logService.updateLogById(req.params.id, req.body);
        return res.json(log);
    }
}


export default LogController;