import { codegen, Model } from '@rotcare/codegen';
import { generateHttpRpcServers } from '@rotcare/io-http-rpc';
import { InMemDatabase } from '@rotcare/io';

export const httpRpcServers = codegen((...models: Model[]) => {
    return generateHttpRpcServers(models);
});

export const ioConf = {
    database: new InMemDatabase(),
    serviceProtocol: undefined as any,
};