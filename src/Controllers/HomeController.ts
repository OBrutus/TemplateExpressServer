import IHandler from '../Handlers/IHandler';
import IController from './IController';
import EndpointConstant from '../Utils/Constant/EndpointConstant';
import HomeHandler from '../Handlers/HomeHandler';
import { Request, Response } from 'express';
import Validator from '../Utils/Validator/Validator';

export default class HomeController implements IController {
    public static readonly instance: IController = new HomeController();
    public instance: IController = HomeController.instance;

    // use only static instance variable and make class Singleton
    private constructor() {}

    public handleEvent(req: Request, _res: Response): void {
        Validator.validateTruthy(req, 'The request found is null or undefined');
        throw new Error('Method not implemented.');
    }

    public getEndpoint(): string {
        return EndpointConstant.HOME_ENDPOINT;
    }

    public getHandler(): IHandler {
        return new HomeHandler();
    }
}
