import { codegen, Model } from '@rotcare/codegen';
import type { SomeModel } from './SomeModel';

const services = codegen((someModel: Model<SomeModel>) => {
    const encodedServices = JSON.stringify(someModel.staticMethods.map(m => m.name));
    return `return ${encodedServices}`;
})

console.log(services);