import { codegen, Model } from '@rotcare/codegen';
import { registerServerless } from '@rotcare/cloud';
import { generateServerlessFunctions } from '@rotcare/cloud';
import { Impl } from '@rotcare/io';

const functions = codegen((...models: Model[]) => {
    return generateServerlessFunctions(models);
});

registerServerless({
    ioConf: {
        database: new Impl.InMemDatabase(),
        serviceProtocol: undefined as any,
    },
    functions,
});
