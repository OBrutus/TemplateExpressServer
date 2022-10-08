import { Request, Response } from 'express';
import IHandler from '../Handlers/IHandler';
import DummyController from './DummyController';
import HomeController from './HomeController';

export default interface IController {
    instance: IController;
    getEndpoint(): string;
    getHandler(): IHandler;
    handleEvent(request: Request, response: Response): void;
}

export abstract class AbstractController implements IController {
    abstract instance: IController;
    abstract getEndpoint(): string;
    abstract getHandler(): IHandler;
    abstract handleEvent(): void;

    public static getAllControllers(): IController[] {
        return [
            HomeController.instance,
            DummyController.instance
        ];
    }
}
