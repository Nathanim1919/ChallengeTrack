import express from 'express';
import { Request, Response } from 'express';


const app = express();

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World");
});

app.get("/users", (req: Request, res: Response) => {
    res.send({
        "name": "Nathanim Tadele",
        "age": 23
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
