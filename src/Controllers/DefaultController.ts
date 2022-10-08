import IHandler from '../Handlers/IHandler';
import IController from './IController';
import EndpointConstant from '../Utils/Constant/EndpointConstant';

export default class DefaultController implements IController {
    public static readonly instance :IController = new DefaultController();

    // use only factory method to get any instance
    private constructor() {}

    public getEndpoint(): string {
        return EndpointConstant.DEFAULT_ENDPOINT;
    }

    public getHandler(): IHandler {
        throw new Error('Method not implemented.');
    }
}
