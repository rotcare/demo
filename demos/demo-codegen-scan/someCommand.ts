import { codegen, Model } from '@rotcare/codegen';

// ...models 表示扫描所有的文件
const services = codegen((...models: Model[]) => {
    const services = [];
    for (const model of models) {
        for (const staticMethod of model.staticMethods) {
            services.push(staticMethod.name);
        }
    }
    return `return ${JSON.stringify(services)}`;
})

console.log(services);