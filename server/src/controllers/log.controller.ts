import { ApiResponse } from "../interfaces/ICommon";
import { ILog } from "../interfaces/ILogs";
import LogService from "../services/log.service";
import { Request, Response } from "express";

class LogController {
  constructor(private logService: LogService) {}

  async getChallengeLogs(req: Request, res: Response) {
    return await this.logService.getChallengeLogs(req.params.id);
  }

  async createLog(req: Request, res: Response):Promise<Response<ApiResponse<ILog>>> {
    const { details, challenge } = req.body;
    const { userId } = req;
    return await this.logService.createLog(details, challenge, req.userId!);
  }

  async getChallengeUserLogs(req: Request, res: Response) {
    return await this.logService.getChallengeUserLogs(
      req.params.id,
      req.userId!
    );
  }

  async getUserLogs(req: Request, res: Response) {
    return await this.logService.getUserLogs(req.userId!);
  }

  async getLogById(req: Request, res: Response) {
    return await this.logService.getLogById(req.params.id);
  }

  async updateLogById(req: Request, res: Response) {
    return await this.logService.updateLogById(req.params.id, req.body);
  }
}

export default LogController;
