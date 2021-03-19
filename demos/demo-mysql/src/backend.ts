import { MysqlDatabase } from '@rotcare/io-mysql';

export const ioConf = {
    database: new MysqlDatabase(undefined as any),
    serviceProtocol: undefined as any,
};
export const httpRpcServers = {};