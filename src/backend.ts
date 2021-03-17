import { codegen, Model } from "@rotcare/codegen";
import * as path from 'path';

export const services = codegen((...models: Model[]) => {
    const lines = [
        `
const { Impl, Scene } = require('@rotcare/io');
SERVERLESS.ioConf = {
    database: new Impl.InMemDatabase(),
    serviceProtocol: undefined,
};
SERVERLESS.functions.migrate = new Impl.HttpRpcServer(SERVERLESS, () => import('@motherboard/Migrate'), 'Migrate', 'migrate').handler;`,
    ];
    models.sort((a, b) => a.qualifiedName.localeCompare(b.qualifiedName));
    for (const model of models) {
        if (model.archetype !== 'ActiveRecord' && model.archetype !== 'Gateway') {
            continue;
        }
        const services = [...model.staticProperties.map(p => p.name), ...model.staticMethods.map(m => m.name)]
        for (const service of services) {
            const className = path.basename(model.qualifiedName);
            lines.push(
                [
                    `SERVERLESS.functions.${service} = new Impl.HttpRpcServer(SERVERLESS, `,
                    `() => import('@motherboard/${model.qualifiedName}'), `,
                    `'${className}', '${service}').handler;`,
                ].join(''),
            );
        }
    }
    return lines.join('\n');
});