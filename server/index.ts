import express, { NextFunction, Response, Request } from 'express';
import bodyParser  from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import expressSession from "express-session";
import {dbInstance} from "./src/config/db.config";
import ChallengeRoute from "./src/routes/challenge.route";
import {Routes} from "./src/routes";
import logger from './src/config/logger';
import cookieParser from 'cookie-parser';
import { Category } from './src/models/category.mode';

// Create express app
const app = express();

// Middlewares

// dotenv: Load environment variables from .env file
dotenv.config();

// body-parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json as json
// Use cookie-parser middleware
app.use(cookieParser());
// app.use((req: Request, res: Response, next: NextFunction) => {
//     logger.info({method: req.method, path: req.path}, 'Incoming request');
//     next();
// });

// Log unhandled errors
app.use((err:Error, req:Request, res: Response, next:NextFunction) => {
    logger.error({err}, 'Unhandled error');
    res.status(500).send('Something went wrong');
    next(err);
});


// cors: CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// connect to database
dbInstance.createConnection();




// routes
const baseApiUrl = process.env.BASE_API_URL || '/api/v1'; // Provide a default value or handle undefined case
Routes.configureRoutes(app, baseApiUrl);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
