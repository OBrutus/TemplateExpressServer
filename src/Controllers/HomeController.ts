import { Request, Response } from 'express';
import Validator from '../Utils/Validator/Validator';

export default class HomeController  {
    public static handleEvent(req: Request, _res: Response): void {
        Validator.validateTruthy(req, 'The request found is null or undefined');
        throw new Error('Method not implemented.');
    }
}
