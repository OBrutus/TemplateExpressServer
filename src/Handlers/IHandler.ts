import { Request, Response } from 'express';

export default interface IHandler {
    handleRequest(req :Request, res :Response) :void;
}