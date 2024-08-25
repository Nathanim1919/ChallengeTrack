import express from 'express';
import { Request, Response } from 'express';
import bodyParser  from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import expressSession from "express-session";
import {dbInstance} from "./src/config/db.config";


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

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World");
});

app.get("/users", (req: Request, res: Response) => {
    res.send({
        "name": "Nathan Tadele",
        "age": 23
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
