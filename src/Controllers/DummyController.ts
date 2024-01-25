import { Request, Response } from 'express';
import Validator from '../Utils/Validator/Validator';

export default class DummyController  {
    // It is ok to keep these methods as static, 
    // as express takes only function as input.
    public static handleEvent(req: Request, _res: Response) :void {
        Validator.validateTruthy(req, 'The request found is null or undefined');
        throw new Error('Method not implemented.');
    }
}
