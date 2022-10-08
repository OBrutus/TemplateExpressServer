import IHandler from './IHandler';
import { Request, Response } from 'express';

export default class HomeHandler implements IHandler {
    public handleRequest(req: Request, res: Response): void {
        console.log(`Found request ${JSON.stringify(req.headers)}`);
        res.send({
            code: 'HW101',
            message: "Hello World!"
        });
    }
}
