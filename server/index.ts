import express from 'express';
import bodyParser  from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import expressSession from "express-session";
import {dbInstance} from "./src/config/db.config";
import ChallengeRoute from "./src/routes/challenge.route";
import {Routes} from "./src/routes";

// Create express app
const app = express();

// Middlewares

// dotenv: Load environment variables from .env file
dotenv.config();

// body-parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());

// cors: CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// connect to database
dbInstance.createConnection();

// routes
const BASE_API_URL = '/api/v1';
Routes.configureRoutes(app, BASE_API_URL);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
