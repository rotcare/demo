import { codegen, Model } from '@rotcare/codegen';
import { generateHttpRpcServers } from '@rotcare/io-http-rpc';
import { InMemDatabase, newTrace, Scene } from '@rotcare/io';
import * as http from 'http';
import { migrate } from './migrate';

const httpRpcServers = codegen((...models: Model[]) => {
    return generateHttpRpcServers(models);
});

const ioConf = {
    database: new InMemDatabase(),
    serviceProtocol: undefined as any,
};

new Scene(newTrace('migrate'), ioConf).execute(undefined, async (scene) => {
    await migrate(scene);
});

new http.Server((req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // CORS 有一个预检
    if (req.method === 'OPTIONS') {
        resp.setHeader('Access-Control-Allow-Headers', '*');
        resp.end('');
        return;
    }
    const rpcServer = httpRpcServers[req.url!.substr(1)];
    rpcServer.handle(ioConf, req, resp);
}).listen(3000);