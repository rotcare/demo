import { SomeCommand as INF } from '@motherboard/Home/Private/SomeCommand';

export class SomeCommand extends INF {
    /**
     * @override
     */
    protected async step1() {
        console.log('step1 provided by plugin1');
    }
}