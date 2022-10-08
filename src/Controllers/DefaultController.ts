import { Request, Response } from 'express';
import IHandler from '../Handlers/IHandler';
import IController from './IController';
import EndpointConstant from '../Utils/Constant/EndpointConstant';
import Validator from '../Utils/Validator/Validator';


export default class DefaultController implements IController {
    public static readonly instance: IController = new DefaultController();
    public instance: IController = DefaultController.instance;

    // use only static instance variable and make class Singleton
    private constructor() {}

    public handleEvent(req: Request, _res: Response): void {
        Validator.validateTruthy(req, 'The request found is null or undefined');
        throw new Error('Method not implemented.');
    }

    public getEndpoint(): string {
        return EndpointConstant.DEFAULT_ENDPOINT;
    }

    public getHandler(): IHandler {
        throw new Error('Method not implemented.');
    }
}
