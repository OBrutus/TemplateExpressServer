import express, { Request, Response } from 'express';
import http from 'http';
import { AbstractController } from './Controllers/IController';

export default class Server {
    public app = express();
    private static isInitialised :boolean = false;

    constructor(_port :number) {
        if (Server.isInitialised)
            throw new Error("Attempt to re-initialise the singleton class Server");
        Server.isInitialised = true;
        
        this.initEndpoint();
        this.startServer(_port);
    }
    
    public initEndpoint() :void {
        for(let controller of AbstractController.getAllControllers()) {
            this.app.get(controller.getEndpoint(), (req :Request, res :Response) => {
                controller.getHandler().handleRequest(req, res);
            });
        }
    }

    public startServer(port :number) :http.Server {
        return this.app.listen(port, () => {
            console.log('====================================');
            console.log(`Started the server at port ${port}`);
            console.log('====================================');
        });
    }
}

