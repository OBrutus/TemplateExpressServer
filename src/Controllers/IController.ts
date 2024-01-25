import EndpointConstant from '../Utils/Constant/EndpointConstant';
import DummyController from './DummyController';
import HomeController from './HomeController';

export abstract class MetaController {
    public static readonly ALL_BINDINGS = [
        {endpoint: EndpointConstant.HOME_ENDPOINT, handler: HomeController.handleEvent},
        {endpoint: EndpointConstant.DUMMY_ENDPOINT, handler: DummyController.handleEvent},
    ];
}
