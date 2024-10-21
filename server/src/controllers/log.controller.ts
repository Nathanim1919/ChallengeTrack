import { ApiResponse } from "../interfaces/ICommon";
import { ILog } from "../interfaces/ILogs";
import LogService from "../services/log.service";
import { Request, Response } from "express";
import { formatError, formatResponse } from "../utils/responseFormat";

class LogController {
  constructor(private logService: LogService) {}

  async getChallengeLogs(req: Request, res: Response) {
    return await this.logService.getChallengeLogs(req.params.id);
  }

  async createLog(
    req: Request,
    res: Response
  ): Promise<Response<ApiResponse<ILog>>> {
    console.log("Useris is: ",req.userId);
    const { details, challenge } = req.body;
    const { userId } = req;
    try {
      const log = await this.logService.createLog(
        details,
        challenge,
        req.userId!
      );
      return res
        .status(201)
        .json(formatResponse(log, "Log created successfully"));
    } catch (error) {
      return res.status(400).json(formatError("Failed to create log"));
    }
  }

  async getChallengeUserLogs(req: Request, res: Response) {
    try {
      const logs =  await this.logService.getChallengeUserLogs(
        req.params.id,
        req.userId!
      );
      return res.status(200).json(formatResponse(logs, "Logs fetched successfully"));
    
    } catch (error) {
      return res.status(400).json(formatError("Failed to get challenge logs"));
    }
  }

  async getUserLogs(req: Request, res: Response) {
    try {
      const logs = await this.logService.getUserLogs(req.userId!);
      return res.status(200).json(formatResponse(logs, "Logs fetched successfully"));
    } catch (error) {
      return res.status(400).json(formatError("Failed to get user logs"));
    }
  }

  async getLogById(req: Request, res: Response) {
    try{
      const log = await this.logService.getLogById(req.params.id);
      if(!log){
        return res.status(404).json(formatError("Log not found"));
      }
      return res.status(200).json(formatResponse(log, "Log fetched successfully"));
    } catch (error){
      return res.status(400).json(formatError("Failed to get log"));
    }
  }

  async updateLogById(req: Request, res: Response) {
    try{
      const log = await this.logService.updateLogById(req.params.id, req.body);
      if(!log){
        return res.status(404).json(formatError("Log not found"));
      }
      return res.status(200).json(formatResponse(log, "Log updated successfully"));
    } catch (error){
      return res.status(400).json(formatError("Failed to update log"));
    }
  }
}

export default LogController;
