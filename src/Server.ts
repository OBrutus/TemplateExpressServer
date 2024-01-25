import express, { Express } from 'express';
import compression from 'compression';
import http from 'http';
import { MetaController } from './Controllers/IController';
import { ServerCompressionOptions } from './Utils/Compression/ServerCompressionOptions';

export default class Server {
    public readonly app: Express;
    public static readonly SERVER_PORTS = new Set();
    private httpServer: http.Server | undefined;

    constructor(port: number) {
        this.app = express();

        // middle wares
        this.app.use(compression(ServerCompressionOptions.getDefaultOptions()));

        // initialize endpoints
        this.initEndpoint();

        try {
            this.httpServer = this.startServer(port);
            Server.SERVER_PORTS.add(port);
        } catch(error: unknown) {
            console.error(`Unable to open up the service upon the port ${port}`);
        }
    }

    public initEndpoint() : void {
        for(const bind of MetaController.ALL_BINDINGS) {
            this.app.get(bind.endpoint, bind.handler);
        }
        this.app.get("*", (req, res) => {
            res.send("Not found" + req.toString());
        });
    }

    public startServer(port: number) : http.Server {
        return this.app.listen(port, () => {
            console.log('====================================');
            console.log(`Started the server at port ${port}`);
            console.log('====================================');
        });
    }

    public stopServer() {
        if (!this.httpServer) {
            console.warn(`Tried to close a un-initiated server`);
            return;
        }
        this.httpServer.close();
    }
}
