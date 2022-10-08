import IHandler from '../Handlers/IHandler';
import IController, { AbstractController } from './IController';
import EndpointConstant from '../Utils/Constant/EndpointConstant';
import { Request, Response } from 'express';
import Validator from '../Utils/Validator/Validator';

export default class DummyController extends AbstractController implements IController {
    public static readonly instance: IController = new DummyController();
    public instance: IController = DummyController.instance;

    public handleEvent(req: Request, _res: Response) :void {
        Validator.validateTruthy(req, 'The request found is null or undefined');
        throw new Error('Method not implemented.');
    }

    public getEndpoint(): string {
        return EndpointConstant.DUMMY_ENDPOINT;
    }

    public getHandler(): IHandler {
        throw new Error('Method not implemented.');
    }
}
