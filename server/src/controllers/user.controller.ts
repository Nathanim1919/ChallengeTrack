import { Request, Response } from 'express';
import {UserService} from "../services/user.service";
import {IUser} from "../interfaces/IUser";
import {ApiResponse} from "../interfaces/ICommon";
import {formatError, formatResponse} from "../utils/responseFormat";

class UserController {

    // constructor
    constructor(private userService: UserService) {
    }
    async register(req: Request, res:Response):Promise<Response<ApiResponse<IUser>>> {
        try {
            const registeredUser = await this.userService.registerUser(req.body);
            return res.status(201).json(formatResponse(registeredUser, 'User registered successfully'));
        } catch (error) {
            return res.status(400).json(formatError("Registration failed"));
        }
    }
    async login(req: Request, res:Response) {
        // code here
    }
    async logout(req: Request, res:Response) {
        // code here
    }
    async getUser(req: Request, res:Response) {
        // code here
    }
    async getUsers(req: Request, res:Response) {
        // code here
    }
    async updateUser(req: Request, res:Response) {
        // code here
    }
    async deleteUser(req: Request, res:Response) {
        // code here
    }
}
