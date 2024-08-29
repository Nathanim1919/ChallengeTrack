import { Request, Response } from 'express';
import {UserService} from "../services/user.service";
import {IUser} from "../interfaces/IUser";
import {ApiResponse} from "../interfaces/ICommon";
import {formatError, formatResponse} from "../utils/responseFormat";
import {AuthUtils} from "../utils/auth.utils";
import redisInstance from '../config/redis.config';

export class UserController {

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
        try{
            const user = await this.userService.loginUser(req.body.identifier, req.body.password);
            if(!user){
                return res.status(400).json(formatError("Login failed"));
            }

            const tokens = AuthUtils.generateAccessToken(user);

            if (!tokens) {
                return res.status(400).json(formatError("Login failed"));
            }
            // save refresh token in redis
            await redisInstance.saveStringDataWithExpiration(`refresh_token:${user._id}`, tokens.refreshToken, 7 * 24 * 60 * 60); // 7 days
            return res
                .status(200)
                .cookie('accessToken', tokens.accessToken, {
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true,
                    maxAge: 30 * 60 * 1000 // 30 minutes
                })
                .cookie('refreshToken', tokens.refreshToken, {
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true,
                    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
                })
                .json(formatResponse({
                    user,
                    tokens
                }, 'Login successful'));

        }catch(error){
            return res.status(400).json(formatError("Login failed"));
        }
    }
    async logout(req: Request, res:Response) {
        // code here
        try {
            const userId = req.userId; // Assume userId is extracted from JWT
            await redisInstance.deleteKey(`refresh_token:${userId}`);
            return res
                .status(200)
                .clearCookie('accessToken')
                .clearCookie('refreshToken')
                .json(formatResponse(null, 'Logout successful'));
        } catch (error) {
            return res.status(400).json(formatError("Logout failed"));
        }
    }
    async getUser(req: Request, res:Response):Promise<Response<ApiResponse<IUser>> | void> {
        // code here
        try {
            const user = await this.userService.getUserById(req.userId as string);
            if (!user) {
                return res.status(404).json(formatError("User not found"));
            }
            return res.status(200).json(formatResponse(user, 'User retrieved successfully'));
        } catch (error) {
            return res.status(400).json(formatError("Failed to get user"));
        }
    }
    async getUsers(req: Request, res:Response) {
        // code here
        try {
            const users = await this.userService.searchUsers({});
        } catch (error) {
            return res.status(400).json(formatError("Failed to get users"));
        }
    }
    async updateUser(req: Request, res:Response) {
        // code here
        try {
            const updatedUser = await this.userService.updateUser(req.userId as string, req.body);
            return res.status(200).json(formatResponse(updatedUser, 'User updated successfully'));
        } catch (error) {
            return res.status(400).json(formatError("Failed to update user"));
        }
    }
    async deleteUser(req: Request, res:Response) {
        // code here
        try {
            const deletedUser = await this.userService.deleteUser(req.userId as string);
            return res.status(200).json(formatResponse(deletedUser, 'User deleted successfully'));
        } catch (error) {
            return res.status(400).json(formatError("Failed to delete user"));
        }
    }
}
