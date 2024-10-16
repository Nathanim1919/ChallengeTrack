import { IUser } from "../interfaces/IUser";
import jwt from 'jsonwebtoken';
import {UserService} from "../services/user.service";

class AuthUtils {

    /**
     * Constructor
     * @param userService
     */
    public constructor(private userService: UserService) {}

    /**
     * Generate access token and refresh token
     * @param user
     */
    static generateAccessToken(user: IUser) {
        // if user is not valid, return null
        if (!user || !user._id) {
            return null;
        }

        // if access token secret or refresh token secret is not defined, return null
        if (!process.env.ACCESS_WEB_TOKEN_SECRET || !process.env.REFRESH_WEB_TOKEN_SECRET) {
            return null;
        }

        // generate access token
        const accessToken = jwt.sign({
            userId: user._id,
        }, process.env.ACCESS_WEB_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_WEB_TOKEN_EXPIRY || '30m'
        });

        // generate refresh token
        const refreshToken = jwt.sign({
            userId: user._id,
        }, process.env.REFRESH_WEB_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_WEB_TOKEN_EXPIRY || '7d'
        });

        // return access token and refresh token
        return { accessToken, refreshToken };
    }

    /**
     * Get user info from token
     * @param token
     */
     async getUserInfoFromToken(token: string) {
         // if token is not defined or access token secret is not defined, return null
        if (!token || !process.env.ACCESS_WEB_TOKEN_SECRET) {
            return null;
        }

        try {
            // decode token
            const decodedValue = jwt.verify(token, process.env.ACCESS_WEB_TOKEN_SECRET);
            // get user ID from decoded
            const { userId } = decodedValue as { userId: string };
            // get user by ID
            return await this.userService.getUserById(userId);
        } catch (err) {
            return null;
        }
    }

    /**
     * Get refresh token
     * @param token
     */
    static getRefreshToken(token: string) {
        // if token is not defined or refresh token secret is not defined, return null
        if (!token || !process.env.REFRESH_WEB_TOKEN_SECRET) {
            return null;
        }

        // decode token
        try {
            return jwt.verify(token, process.env.REFRESH_WEB_TOKEN_SECRET);
        } catch (err) {
            return null;
        }
    }

    /**
     * Refresh access token
     * @param token
     */
    static refreshAccessToken(token: string) {
        if (!token || !process.env.ACCESS_WEB_TOKEN_SECRET) {
            return null;
        }

        try {
            return jwt.sign(token, process.env.ACCESS_WEB_TOKEN_SECRET, {
                expiresIn: process.env.ACCESS_WEB_TOKEN_EXPIRY || '30m'
            });
        } catch (err) {
            return null;
        }
    }
}

export { AuthUtils };
