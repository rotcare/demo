import { registerServerless } from '@rotcare/cloud';
import { MysqlDatabase } from '@rotcare/io-mysql';

registerServerless({
    ioConf: {
        database: new MysqlDatabase(undefined as any),
        serviceProtocol: undefined as any,
    },
    functions: {},
});