import { Request, Response } from 'express';

import EndpointConstant from '../Utils/Constant/EndpointConstant';
import DummyController from './DummyController';
import HomeController from './HomeController';

export abstract class MetaController {
    public static readonly ALL_GET_BINDINGS = [
        {endpoint: EndpointConstant.HOME_ENDPOINT, handler: HomeController.handleEvent},
        {endpoint: EndpointConstant.DUMMY_ENDPOINT, handler: DummyController.handleEvent},
        {endpoint: '*', handler: (req: Request, res: Response) => {
            res.status(404);
            res.send(`{response: 'End point not found "${decodeURI(req.url)}"'}`)
        }}
    ];
}
