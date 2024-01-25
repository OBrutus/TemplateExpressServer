import {describe, expect, test} from '@jest/globals';
import Server from '../src/Server';

describe('It checks for running multiple servers', () => {
    test('Creating 2 servers on different port', async () => {
        const server3000 = new Server(3000);
        const server8080 = new Server(8080);

        await expect(server3000).toBeTruthy();
        await expect(server3000).toBeInstanceOf(Server);

        await expect(server8080).toBeTruthy();
        await expect(server8080).toBeInstanceOf(Server);

        await server3000.stopServer();
        await server8080.stopServer();
    });
});