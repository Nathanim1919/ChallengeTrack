import { NextFunction , Request, Response} from "express";
import jwt from "jsonwebtoken";

export const verifyUser = (req: Request, res:Response, next: NextFunction) => {
    try {
        const accessToken = req.cookies.accessToken;
        if(!accessToken) {
            return res.status(401).json({message: "Unauthorized"});
        }

        if (!process.env.ACCESS_WEB_TOKEN_SECRET) {
            return res.status(401).json({message: "Unauthorized"});
        }

        // verify the access token
        const decoded = jwt.verify(accessToken, process.env.ACCESS_WEB_TOKEN_SECRET);

        // set the user ID in the request object
        req.userId = (decoded as {userId: string}).userId;

        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }
};