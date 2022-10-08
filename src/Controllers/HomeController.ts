import IHandler from '../Handlers/IHandler';
import IController from './IController';
import EndpointConstant from '../Utils/Constant/EndpointConstant';
import HomeHandler from '../Handlers/HomeHandler';

export default class HomeController implements IController {
    public static readonly instance :IController = new HomeController();

    // use only factory method to get any instance
    private constructor() {}

    public getEndpoint(): string {
        return EndpointConstant.HOME_ENDPOINT;
    }

    public getHandler(): IHandler {
        return new HomeHandler();
    }
}
