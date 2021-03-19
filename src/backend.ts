import { codegen, Model } from '@rotcare/codegen';
import { generateHttpRpcServers } from '@rotcare/cloud';
import { Impl } from '@rotcare/io';

export const httpRpcServers = codegen((...models: Model[]) => {
    return generateHttpRpcServers(models);
});

export const ioConf = {
    database: new Impl.InMemDatabase(),
    serviceProtocol: undefined as any,
};