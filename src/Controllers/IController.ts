import IHandler from '../Handlers/IHandler';
import DummyController from './DummyController';
import HomeController from './HomeController';

export default interface IController {
    getEndpoint() :string;
    getHandler() :IHandler;
}

export abstract class AbstractController implements IController {
    abstract getEndpoint(): string 
    abstract getHandler(): IHandler

    public static getAllControllers(): IController[] {
        return [
            HomeController.instance,
            DummyController.instance
        ];
    }
}
