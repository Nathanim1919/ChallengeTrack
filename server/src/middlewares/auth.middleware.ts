import {IUser} from "../interfaces/IUser";
import jwt from 'jsonwebtoken';

export const generateAccessToken = (user: IUser) => {
    // check if user is not null and has an id
    if (!user || !user._id){
        return null;
    }
    // check if access token secret is set and not empty
    if (!process.env.ACCESS_WEB_TOKEN_SECRET || !process.env.REFRESH_WEB_TOKEN_SECRET){
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
}
