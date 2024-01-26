import { Request, Response } from 'express';
import Validator from '../Utils/Validator/Validator';
import EndpointConstant from '../Utils/Constant/EndpointConstant';

export default class DummyController  {
    // It is ok to keep these methods as static, 
    // as express takes only function as input.
    public static handleEvent(req: Request, res: Response) :void {
        try {
            Validator.validateTruthy(req, 'The request found is null or undefined');
            throw new Error('Method not implemented.');
        } catch (error: unknown) {
            console.error(`Found an error in ${DummyController.name}, error = ${error}`);
            if (! (error instanceof Error) ) {
                console.error(`Encountered above is not a type of error`);
                res.send(EndpointConstant.GENERIC_ERROR_MESSAGE)
                return;
            }
            if (error.message === 'Method not implemented.') {
                res.send(`Endpoint not implemented`);
            } else {
                res.send(EndpointConstant.GENERIC_ERROR_MESSAGE)
            }
        }
    }
}
